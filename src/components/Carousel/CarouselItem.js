import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Play from '../../icons/Play';

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
  index,
  length,
}) => {
  return (
    <div
      className={`carousel-item${
        isActive ? ' carousel-item--is-active' : ''
      } ${getSlidingDirection(enterFrom, exitTo)}`}
      id={`carousel-item-${index + 1}`}
      aria-hidden={isActive ? 'false' : 'true'}
      role='group'
      aria-roledescription='slide'
      aria-label={`${index + 1} of ${length}`}
    >
      <div className='carousel-item__text-block'>
        <h2 className='carousel-item__title'>{title}</h2>
        <p className='carousel-item__description'>{description}</p>
        <Link
          className='btn-primary'
          tabIndex={isActive ? 0 : -1}
          to={`/now-playing/${slug}`}
        >
          <Play additionalClasses='inline mr-2' />
          VIEW FILM
        </Link>
      </div>
      <div
        className={`carousel-item__mobile-text-block${
          isActive ? ' carousel-item__mobile-text-block--is-active' : ''
        } ${getSlidingDirection(enterFrom, exitTo)}`}
        aria-hidden={isActive ? 'false' : 'true'}
      >
        <h2 className='carousel-item__title'>{title}</h2>
      </div>
      <Link
        className='a-pseudo-wrap--mb'
        tabIndex={isActive ? 0 : -1}
        aria-label={`Go to ${title} page`}
        to={`/now-playing/${slug}`}
      />
      <div className='carousel-item__img-block'>
        <picture className='z-neg w-full'>
          <source
            sizes='(min-width: 1700px) 72rem, (min-width: 1400px) 58rem, (min-width: 1100px) 48rem, (min-width: 500px) 36rem, 100vw'
            srcSet={`${img.webp400} 400w,
            ${img.webp640} 640w,
            ${img.webp800} 800w,
            ${img.webp1024} 1024w,
            ${img.webp1200} 1200w,`}
            type='image/webp'
          />
          <source
            sizes='(min-width: 1700px) 72rem, (min-width: 1400px) 58rem, (min-width: 1100px) 48rem, (min-width: 500px) 36rem, 100vw'
            srcSet={`${img.jpg400} 400w,
            ${img.jpg640} 640w,
            ${img.jpg800} 800w,
            ${img.jpg1024} 1024w,
            ${img.jpg1200} 1200w,`}
          />
          <img src={img.jpg800} alt='' className='carousel-item__img' />
        </picture>
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
  img: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default memo(CarouselItem);
