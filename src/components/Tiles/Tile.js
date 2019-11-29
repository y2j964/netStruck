import React, { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { imgTypeMini } from '../../netStruckDataTypes';

const placementInViewportClassValues = {
  leftPreview: 'tile-group__item',
  rightPreview: 'tile-group__item',
  leftEdge: 'tile-group__item tile-group__item--is-left-edge',
  rightEdge: 'tile-group__item tile-group__item--is-right-edge',
  middle: 'tile-group__item',
  offscreen: 'tile-group__item',
};

const getPositionalClasses = (hoveredItem, index, placementInViewport) => {
  if (
    hoveredItem.position === 'leftEdge' &&
    ['middle', 'rightEdge', 'rightPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-hard-right`;
  }

  if (hoveredItem.position === 'middle') {
    if (['leftEdge', 'leftPreview'].includes(placementInViewport)) {
      return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-left`;
    }
    if (['rightEdge', 'rightPreview'].includes(placementInViewport)) {
      return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-right`;
    }
    if (placementInViewport === 'middle' && index > hoveredItem.index) {
      return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-right`;
    }
    if (placementInViewport === 'middle' && index < hoveredItem.index) {
      return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-left`;
    }
  }

  if (
    hoveredItem.position === 'rightEdge' &&
    ['middle', 'leftEdge', 'leftPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-hard-left`;
  }

  return placementInViewportClassValues[placementInViewport];
};

const getExploderClass = placementInViewport => {
  if (placementInViewport === 'leftEdge') {
    return ' exploder exploder--is-left-edge';
  }
  if (placementInViewport === 'rightEdge') {
    return 'exploder exploder--is-right-edge';
  }
  return 'exploder';
};

const Tile = ({
  title,
  year,
  slug,
  img,
  alt,
  children,
  index,
  ariaLabel,
  placementInViewport,
  hoveredItem,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  console.log('t');
  // track if exploder enter transition has ended so we can
  // smoothly cancel the transition
  const enterTransitionEnded = useRef(false);
  const revealRef = useRef(false);

  useEffect(() => {
    // reset hoveredItem if Tile is removed from view
    return () => {
      handleMouseLeave({ position: '', index: NaN });
    };
  }, [handleMouseLeave]);

  return (
    <li
      className={`${getPositionalClasses(
        hoveredItem,
        index,
        placementInViewport
      )} tile`}
      onMouseEnter={() => {
        handleMouseEnter({ position: placementInViewport, index });
      }}
      onMouseLeave={() => handleMouseLeave({ position: '', index: NaN })}
      aria-hidden={
        placementInViewport !== 'middle' &&
        placementInViewport !== 'leftEdge' &&
        placementInViewport !== 'rightEdge'
      }
      aria-label={ariaLabel}
    >
      <div className="ratio-16-9 ratio-16-9--overflowed">
        <picture>
          <source srcSet={img.webp400} type="image/webp" />
          <source srcSet={img.jpg400} />
          <img src={img.jpg400} alt={alt} />
        </picture>
        <div className="tile__underlay flex justify-center items-center">
          {/* <p className='text-white truncate px-2'>{title}</p> */}
        </div>
        <Link
          to={`/now-playing/${slug}`}
          className="absolute top-0 bottom-0 left-0 right-0"
          tabIndex={`${
            ['offscreen', 'leftPreview', 'rightPreview'].includes(
              placementInViewport
            )
              ? '-1'
              : '0'
          }`}
          aria-label={title}
        />
        <div>
          <CSSTransition
            in={hoveredItem.index === index}
            // timeout should match transition time of exploder
            classNames={{
              enter: 'exploder-enter',
              enterActive: 'exploder-enter-active',
              enterDone: 'exploder-enter-done',
              exit: enterTransitionEnded.current
                ? 'exploder-exit'
                : 'exploder-exit-active',
              // cancel animation if enter transition hasn't ended
              exitActive: 'exploder-exit-active',
              exitDone: 'exploder-exit-done',
            }}
            timeout={800}
            onEnter={() => {
              // Setup reveal animation logic here. Originally, I was using
              // a nested CSSTransition w/ the appear prop, but that produced a
              // jump bug in Chrome; this approach sidesteps that bug.
              //
              revealRef.current.style.opacity = '0';
              revealRef.current.style.animation =
                'fadeIn 200ms ease-in 750ms forwards';
            }}
            onEntered={() => {
              enterTransitionEnded.current = true;
            }}
            onExit={() => {
              revealRef.current.style.opacity = '1';
              revealRef.current.style.animation =
                'fadeAway 450ms ease-in-out 250ms forwards';
            }}
            onExited={() => {
              enterTransitionEnded.current = false;
            }}
            mountOnEnter
            unmountOnExit
          >
            <div className={getExploderClass(placementInViewport)}>
              <picture>
                <source srcSet={img.webp400} type="image/webp" />
                <source srcSet={img.jpg400} />
                <img
                  src={img.jpg400}
                  alt={alt}
                  className="absolute top-0 left-0 right-0 bottom z-neg"
                />
              </picture>
              <div
                className="bg-alpha flex flex-col items-center justify-around w-full h-full relative jitterbug"
                ref={revealRef}
              >
                <h3 className="tile__title">{title}</h3>
                <span className="tile__title">{year}</span>
                {children}
                <Link
                  to={`/now-playing/${slug}`}
                  className="absolute top-0 bottom-0 left-0 right-0"
                  tabIndex="-1"
                  aria-label={title}
                />
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </li>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  img: imgTypeMini,
  alt: PropTypes.string,
  slug: PropTypes.string.isRequired,
  index: PropTypes.number,
  ariaLabel: PropTypes.string,
  placementInViewport: PropTypes.string.isRequired,
  hoveredItem: PropTypes.shape({
    position: PropTypes.oneOf([
      'leftEdge',
      'middle',
      'rightEdge',
      'offscreen',
      '',
    ]).isRequired,
    index: PropTypes.number,
  }),
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  children: PropTypes.element,
};

const areEqual = (prevProps, nextProps) =>
  prevProps.placementInViewport === 'offscreen' &&
  nextProps.placementInViewport === 'offscreen';

export default memo(Tile, areEqual);
