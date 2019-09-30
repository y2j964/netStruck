import React from 'react';
import PropTypes from 'prop-types';

export default function Minus({ width, height, fill, additionalClasses }) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={width || '12'}
      height={height || '12'}
      fill={fill || 'white'}
      aria-hidden='true'
      className={additionalClasses || ''}
    >
      <path d='M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z'></path>
    </svg>
  );
}

Minus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
