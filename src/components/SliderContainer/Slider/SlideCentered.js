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
              sizes='(min-width: 800px) calc(50vw - 1em), 100vw'
              srcSet={`${slide.img.webp400} 400w,
				  ${slide.img.webp640} 640w,
				  ${slide.img.webp800} 800w,
				  ${slide.img.webp1024} 1024w,
				  ${slide.img.webp1200} 1200w,`}
              type='image/webp'
            />
            <source
              sizes='(min-width: 800px) calc(50vw - 1em), 100vw'
              srcSet={`${slide.img.webp400} 400w,
				  ${slide.img.jpg640} 640w,
				  ${slide.img.jpg800} 800w,
				  ${slide.img.jpg1024} 1024w,
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
