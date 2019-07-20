import React, { memo } from 'react';
import PropTypes from 'prop-types';

function SlideCentered({ slide }) {
  return (
    <div className='slide slide--centered'>
      <h2 className='sr-only'>{slide.heading}</h2>
      <div className='relative w-full sm-w-56'>
        <div className='ratio-2-1'>
          <img src={slide.img} alt={slide.imgAlt} className='object-cover' />
        </div>
      </div>
      <div className='relative w-full sm-w-37 sm:ml-auto text-center sm:text-left'>
        <p className='mb-5 text-white text-sm'>{slide.text}</p>
        <a href='' className='link-btn'>
          SIGN UP
        </a>
      </div>
    </div>
  );
}

SlideCentered.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default memo(SlideCentered);
