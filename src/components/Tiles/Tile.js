import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

const placementInViewportClassValues = {
  leftPreview: 'tile-group__item',
  rightPreview: 'tile-group__item',
  leftEdge: 'tile-group__item tile-group__item--is-left-edge',
  rightEdge: 'tile-group__item tile-group__item--is-right-edge',
  middle: 'tile-group__item ',
  offscreen: 'tile-group__item',
};

const getTileClasses = (
  rightEdgeIsHovered,
  leftEdgeIsHovered,
  middleHoveredIndex,
  index,
  placementInViewport,
) => {
  if (
    leftEdgeIsHovered &&
    ['middle', 'rightEdge', 'rightPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-hard-right`;
  }

  if (
    middleHoveredIndex &&
    ['leftEdge', 'leftPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-left`;
  }

  if (
    middleHoveredIndex &&
    ['rightEdge', 'rightPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-right`;
  }

  if (middleHoveredIndex && placementInViewport === 'middle') {
    if (index > middleHoveredIndex) {
      return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-right`;
    }
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-soft-left`;
  }

  if (
    rightEdgeIsHovered &&
    ['middle', 'leftEdge', 'leftPreview'].includes(placementInViewport)
  ) {
    return `${placementInViewportClassValues[placementInViewport]} tile-group__item--is-hard-left`;
  }

  return placementInViewportClassValues[placementInViewport];
};

const Tile = ({
  title,
  year,
  placementInViewport,
  ariaLabel,
  slug,
  img,
  index,
  rightEdgeIsHovered,
  handleRightEdgeIsHovered,
  leftEdgeIsHovered,
  handleLeftEdgeIsHovered,
  middleHoveredIndex,
  handleMiddleHoveredIndex,
  isAddedToMyList,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (placementInViewport === 'leftEdge') {
      handleLeftEdgeIsHovered(true);
    }
    if (placementInViewport === 'rightEdge') {
      handleRightEdgeIsHovered(true);
    }
    if (placementInViewport === 'middle') {
      handleMiddleHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (placementInViewport === 'leftEdge') {
      handleLeftEdgeIsHovered(false);
    }
    if (placementInViewport === 'rightEdge') {
      handleRightEdgeIsHovered(false);
    }
    if (placementInViewport === 'middle') {
      // empty state, producing falsy value
      handleMiddleHoveredIndex();
    }
  };

  if (img) {
    return (
      <li
        className={`
          ${getTileClasses(
            rightEdgeIsHovered,
            leftEdgeIsHovered,
            middleHoveredIndex,
            index,
            placementInViewport,
          )} tile`}
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
            <img src={img.jpg400} alt='' />
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
            {isHovered && (
              <React.Fragment>
                <h3 className='tile__title'>{title}</h3>
                <span className='tile__title'>{year}</span>
                <ToggleToMyListBtn
                  slug={slug}
                  isAddedToMyList={isAddedToMyList}
                  isHovered={isHovered}
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
  }
};

Tile.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  img: PropTypes.object,
  id: PropTypes.string,
  placementInViewport: PropTypes.string,
  slug: PropTypes.string,
  ariaLabel: PropTypes.string,
  index: PropTypes.number,
  isAddedToMyList: PropTypes.bool,
  rightEdgeIsHovered: PropTypes.bool,
  handleRightEdgeIsHovered: PropTypes.func,
  leftEdgeIsHovered: PropTypes.bool,
  handleLeftEdgeIsHovered: PropTypes.func,
  middleHoveredIndex: PropTypes.number,
  handleMiddleHoveredIndex: PropTypes.func,
};

export default memo(Tile);
