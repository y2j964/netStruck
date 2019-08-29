import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleToMyListBtn from './ToggleToMyListBtn';

const Tile = ({
  filmGroupLength,
  title,
  id,
  slug,
  index,
  img,
  isAddedToMyList,
  visibleSlideIds,
  // isLeftMostSlide,
  // isRightMostSlide,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleIsHovered = () => {
    return setIsHovered(!isHovered);
  };
  console.log('tile rendered', title);
  console.log('isHovered ', isHovered);
  return (
    <li
      className={`tile-group__item${
        visibleSlideIds.includes(id) ? ' tile-group__item--is-active' : ''
      } ${
        id === visibleSlideIds[0] ? ' tile-group__item--is-leftmost-active' : ''
      } ${
        id === visibleSlideIds[visibleSlideIds.length - 1]
          ? ' tile-group__item--is-rightmost-active'
          : ''
      } tile`}
      onMouseEnter={toggleIsHovered}
      onMouseLeave={toggleIsHovered}
      // eslint-disable-next-line no-unneeded-ternary
      aria-hidden={visibleSlideIds.includes(id) ? false : true}
      aria-label={`slide ${index + 1} of ${filmGroupLength}`}
    >
      {/* <p>{title}</p> */}
      <div className='ratio-16-9'>
        <img src={img} alt='' />
        <Link
          to={`/now-playing/${slug}`}
          className='absolute top-0 bottom-0 left-0 right-0'
          tabIndex={`${visibleSlideIds.includes(id) ? '0' : '-1'}`}
          aria-label={title}
        ></Link>
        <div className='tile__btn-group'>
          <ToggleToMyListBtn
            tileIsHovered={isHovered}
            id={id}
            isAddedToMyList={isAddedToMyList}
          />
        </div>
      </div>
      <h3 className='tile__title'>{title}</h3>
    </li>
  );
};

Tile.propTypes = {
  filmGroupLength: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  slug: PropTypes.string,
  index: PropTypes.number.isRequired,
  isAddedToMyList: PropTypes.bool.isRequired,
  visibleSlideIds: PropTypes.array.isRequired,
  isRightMostSlide: PropTypes.bool.isRequired,
  isLeftMostSlide: PropTypes.bool.isRequired,
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.isAddedToMyList === nextProps.isAddedToMyList;
// }

export default memo(Tile);
