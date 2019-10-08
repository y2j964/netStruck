import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SlideCentered({ slide }) {
  return (
    <div className='slide slide--centered'>
      <h2 className='sr-only'>{slide.heading}</h2>
      <div className='slide--centered__img-group'>
        <div className='ratio-2-1'>
          <picture>
            <source
              sizes='100vw'
              srcSet={`${slide.img.webp200} 200w,
              ${slide.img.webp400} 400w,
              ${slide.img.webp800} 800w,
              ${slide.img.webp1200} 1200w,`}
              type='image/webp'
            />
            <source
              sizes='100vw'
              srcSet={`${slide.img.jpg200} 200w,
              ${slide.img.jpg400} 400w,
              ${slide.img.jpg800} 800w,
              ${slide.img.jpg1200} 1200w,`}
            />
            <img src={slide.img.jpg800} alt='' className='object-cover' />
          </picture>
        </div>
      </div>
      <div className='slide--centered__text-group'>
        <p className='mb-5 text-white text-sm'>{slide.text}</p>
        <Link to={'/signup'} className='btn-primary btn-primary--wider'>
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

SlideCentered.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default memo(SlideCentered);
