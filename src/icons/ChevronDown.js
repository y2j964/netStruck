import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronDown({ svgClassName }) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='white'
      aria-hidden='true'
      className={svgClassName}
    >
      <path d='M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'></path>
    </svg>
  );
}

ChevronDown.propTypes = {
  svgClassName: PropTypes.string,
};