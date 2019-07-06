import React from 'react';
import PropTypes from 'prop-types';

export default function Slide(props) {
  return (
    <div className='slide'>
      <img
        src={props.slide.img}
        alt={props.slide.imgAlt}
        className='absolutely-covered'
      />
      <div className='absolutely-centered'>
        <div className='slide__text-block'>
          <p className='slide__text'>{props.slide.text} </p>
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
