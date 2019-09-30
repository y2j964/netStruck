import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronDown({
  width,
  height,
  fill,
  additionalClasses,
}) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width || '24'}
      height={height || '24'}
      fill={fill || 'white'}
      aria-hidden='true'
      className={additionalClasses || ''}
    >
      <path d='M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'></path>
    </svg>
  );
}

ChevronDown.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
