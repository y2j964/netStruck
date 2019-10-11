import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Slide({ slide }) {
  return (
    <div className='slide'>
      <h2 className='sr-only'>{slide.heading}</h2>
      <picture>
        <source
          sizes='100vw'
          srcSet={`${slide.img.webp400} 400w,
				  ${slide.img.webp640} 640w,
				  ${slide.img.webp800} 800w,
				  ${slide.img.webp1024} 1024w,
				  ${slide.img.webp1200} 1200w,
				  ${slide.img.webp1366} 1366w,
				  ${slide.img.webp1600} 1600w,
				  ${slide.img.webp1920} 1920w`}
          type='image/webp'
        />
        <source
          sizes='100vw'
          srcSet={`${slide.img.jpg400} 400w,
				  ${slide.img.jpg640} 640w,
				  ${slide.img.jpg800} 800w,
				  ${slide.img.jpg1024} 1024w,
				  ${slide.img.jpg1200} 1200w,
				  ${slide.img.jpg1366} 1366w,
				  ${slide.img.jpg1600} 1600w,
				  ${slide.img.jpg1920} 1920w`}
        />
        <img src={slide.img.jpg800} alt='' className='absolutely-covered' />
      </picture>
      {/* <img src={slide.img} alt={slide.imgAlt} className='absolutely-covered' /> */}
      <div className='absolutely-centered'>
        <div className='slide__text-block'>
          <p className='slide__text'>{slide.text} </p>
          <Link to={'/signup'} className='btn-primary btn-primary--wider'>
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default memo(Slide);
