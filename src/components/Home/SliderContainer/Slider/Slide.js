import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Slide({ slide }) {
  return (
    <div className='slide'>
      <h2 className='sr-only'>{slide.heading}</h2>
      <img src={slide.img} alt={slide.imgAlt} className='absolutely-covered' />
      <div className='absolutely-centered'>
        <div className='slide__text-block'>
          <p className='slide__text'>{slide.text} </p>
          <a href='' className='link-btn'>
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default memo(Slide);
