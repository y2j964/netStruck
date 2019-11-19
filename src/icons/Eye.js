import React from 'react';
import PropTypes from 'prop-types';

export default function Eye({ width, height, fill, additionalClasses }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={width || '48'}
      height={height || '55'}
      className={additionalClasses || ''}
      aria-hidden="true"
    >
      <path
        stroke="#fff"
        fill={fill || '#1a202c'}
        d="M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"
      ></path>
    </svg>
  );
}

Eye.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
