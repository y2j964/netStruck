import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Tile = ({
  filmGroupLength,
  title,
  duration,
  year,
  director,
  actors,
  id,
  index,
  img,
  visibleSlideIds,
  isLeftMostSlide,
  isRightMostSlide,
}) => {
  console.log('tile rendered');
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
      aria-hidden={`${visibleSlideIds.includes(id) ? 'false' : 'true'}`}
      aria-label={`slide ${index + 1} of ${filmGroupLength}`}
    >
      <a
        href='www.google.com'
        tabIndex={`${visibleSlideIds.includes(id) ? '0' : '-1'}`}
      >
        {/* <p>{title}</p> */}
        <div className='ratio-16-9'>
          <img src={img} alt='' />
          <div className='absolute left-0 bottom-0'>
            {/* <div className='w-4/5 p-1'>
            {/* <span className='block text-xs'>{title}</span>
            <span className='block text-xs'>{duration}</span>
            <span className='block text-xs'>{year}</span>
            <span className='block text-xs'>{director}</span> */}
            {/* <span className="block">{year}</span> */}
            {/* </div> */}
          </div>
        </div>
        <h3 className='tile__title'>{title}</h3>
      </a>
    </li>
  );
};

Tile.propTypes = {
  filmGroupLength: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
  actors: PropTypes.array,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
  visibleSlideIds: PropTypes.array.isRequired,
};

export default memo(Tile);
