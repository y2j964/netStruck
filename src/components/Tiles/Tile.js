import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { imgTypeMini } from '../../netStruckDataTypes';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

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

const Tile = ({
  title,
  year,
  slug,
  img,
  alt,
  isAddedToMyList,
  index,
  ariaLabel,
  placementInViewport,
  hoveredItem,
  setHoveredItem,
}) => {
  const handleMouseEnter = () => {
    setHoveredItem({ position: placementInViewport, index });
  };

  const handleMouseLeave = () => {
    setHoveredItem({ position: '', index: NaN });
  };

  useEffect(() => {
    // reset hoveredItem if Tile is removed from view
    return () => {
      setHoveredItem({ position: '', index: NaN });
    };
  }, [setHoveredItem]);

  return (
    <li
      className={`
          ${getPositionalClasses(hoveredItem, index, placementInViewport)} ${
        hoveredItem.index === index ? 'tile-group__item--is-hovered ' : ''
      }tile`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // eslint-disable-next-line no-unneeded-ternary
      aria-hidden={
        placementInViewport !== 'middle' &&
        placementInViewport !== 'leftEdge' &&
        placementInViewport !== 'rightEdge'
      }
      aria-label={ariaLabel}
    >
      <div className='z-neg ratio-16-9 ratio-16-9--overflowed'>
        <picture>
          <source srcSet={img.webp400} type='image/webp' />
          <source srcSet={img.jpg400} />
          <img src={img.jpg400} alt={alt} />
        </picture>
        <div className='tile__underlay flex justify-center items-center'>
          {/* <p className='text-white truncate px-2'>{title}</p> */}
        </div>
        <Link
          to={`/now-playing/${slug}`}
          className='absolute top-0 bottom-0 left-0 right-0'
          tabIndex={`${
            ['offscreen', 'leftPreview', 'rightPreview'].includes(
              placementInViewport,
            )
              ? '-1'
              : '0'
          }`}
          aria-label={title}
        />
        <div className='exploder flex flex-col items-center justify-around'>
          {hoveredItem.index === index && (
            <React.Fragment>
              <h3 className='tile__title'>{title}</h3>
              <span className='tile__title'>{year}</span>
              <ToggleToMyListBtn
                slug={slug}
                isAddedToMyList={isAddedToMyList}
              />
              <Link
                to={`/now-playing/${slug}`}
                className='absolute top-0 bottom-0 left-0 right-0'
                tabIndex='-1'
                aria-label={title}
              />
            </React.Fragment>
          )}
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
  isAddedToMyList: PropTypes.bool.isRequired,
  index: PropTypes.number,
  ariaLabel: PropTypes.string,
  placementInViewport: PropTypes.string.isRequired,
  hoveredItem: PropTypes.shape({
    position: PropTypes.oneOf(['leftEdge', 'middle', 'rightEdge', ''])
      .isRequired,
    index: PropTypes.number,
  }),
  setHoveredItem: PropTypes.func,
};

export default memo(Tile);
