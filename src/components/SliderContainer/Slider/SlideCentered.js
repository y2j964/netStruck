import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SlideCentered({ slide }) {
  return (
    <div className='slide slide--centered'>
      <h2 className='sr-only'>{slide.heading}</h2>
      <div className='slide--centered__img-group'>
        <div className='ratio-2-1'>
          <img src={slide.img} alt={slide.imgAlt} className='object-cover' />
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
