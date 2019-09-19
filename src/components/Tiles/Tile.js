import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

const placementInViewportClassValues = {
  leftPreview: 'tile-group__item tile-group__item--is-active',
  // leftEdgeIsHovered: tile-group__item--is-stationary
  //  rightEdgeIsHovered: 'tile-group__item tile-group__item--is-hard-left',
  rightPreview:
    'tile-group__item tile-group__item--is-active tile-group__item--is-right-preview-active',
  leftEdge:
    'tile-group__item tile-group__item--is-active tile-group__item--is-left-edge',
  //   rightEdgeIsHovered: 'tile-group__item tile-group__item--is-hard-left tile-group__item--is-left-edge',
  rightEdge:
    'tile-group__item tile-group__item--is-active tile-group__item--is-right-edge',
  middle: 'tile-group__item tile-group__item--is-active',
  // rightEdgeIsHovered: 'tile-group__item tile-group__item--is-hard-left',
  offscreen: 'tile-group__item',
};

const getTileClasses = (
  rightEdgeIsHovered,
  leftEdgeIsHovered,
  placementInViewport,
) => {
  if (
    rightEdgeIsHovered &&
    ['middle', 'leftEdge', 'leftPreview'].includes(placementInViewport)
  ) {
    return 'tile-group__item tile-group__item--is-hard-left';
  }

  if (leftEdgeIsHovered && placementInViewport === 'leftPreview') {
    return 'tile-group__item tile-group__item--is-stationary';
  }
  return placementInViewportClassValues[placementInViewport];
};

const Tile = ({
  title,
  year,
  id,
  placementInViewport,
  ariaLabel,
  slug,
  img,
  rightEdgeIsHovered,
  handleRightEdgeIsHovered,
  leftEdgeIsHovered,
  handleLeftEdgeIsHovered,
  isAddedToMyList,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (placementInViewport === 'leftEdge') {
      handleLeftEdgeIsHovered(true);
    }
    if (placementInViewport === 'rightEdge') {
      handleRightEdgeIsHovered(true);
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
  };

  return (
    <li
      className={`
        ${getTileClasses(
          rightEdgeIsHovered,
          leftEdgeIsHovered,
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
      {/* <p>{title}</p> */}
      <div className='ratio-16-9 ratio-16-9--overflowed'>
        <img src={img} alt='' />
        <Link
          to={`/now-playing/${slug}`}
          className='absolute top-0 bottom-0 left-0 right-0 z-10'
          tabIndex={`${
            ['offscreen', 'leftPreview', 'rightPreview'].includes(
              placementInViewport,
            )
              ? '-1'
              : '0'
          }`}
          aria-label={title}
        />
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-overlay'>
          <h3 className='tile__title'>{title}</h3>
          <span className='tile__title'>{year}</span>
          <ToggleToMyListBtn
            tileIsHovered={isHovered}
            id={id}
            isAddedToMyList={isAddedToMyList}
          />
        </div>
      </div>
    </li>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  img: PropTypes.string,
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
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.isAddedToMyList === nextProps.isAddedToMyList;
// }

export default memo(Tile);
