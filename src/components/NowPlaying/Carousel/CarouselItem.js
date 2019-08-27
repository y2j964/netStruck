import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayIcon from '../../../icons/Play';

const getSlidingDirection = (enterFrom, exitTo) => {
  if (!enterFrom && !exitTo) {
    return '';
  }
  if (enterFrom === 'right') {
    return 'enter-from-right';
  }
  if (enterFrom === 'left') {
    return 'enter-from-left';
  }
  if (exitTo === 'right') {
    return 'exit-to-right';
  }
  if (exitTo === 'left') {
    return 'exit-to-left';
  }
  return '';
};

const CarouselItem = ({
  title,
  description,
  slug,
  isActive,
  enterFrom,
  exitTo,
  img,
  count,
  length,
}) => {
  return (
    <div
      className={`carousel-item${
        isActive ? ' carousel-item--is-active' : ''
      } ${getSlidingDirection(enterFrom, exitTo)}`}
      id={`carousel-item-${count}`}
      aria-hidden={isActive ? 'false' : 'true'}
      role='group'
      aria-roledescription='slide'
      aria-label={`${count} of ${length}`}
    >
      <div className='carousel-item__text-block'>
        <h2 className='carousel-item__title'>{title}</h2>
        <p className='carousel-item__description'>{description}</p>
        <Link
          className='watch-btn'
          tabIndex={isActive ? 0 : -1}
          to={`/now-playing/${slug}`}
        >
          <PlayIcon svgClassName='inline mr-2' />
          VIEW FILM
        </Link>
      </div>
      <div className='carousel-item__img-block'>
        <img src={img} alt='' className='carousel-item__img' />
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  enterFrom: PropTypes.string.isRequired,
  exitTo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default memo(CarouselItem);
