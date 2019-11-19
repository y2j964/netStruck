import React from 'react';
import PropTypes from 'prop-types';

export default function Play({ width, height, fill, additionalClasses }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={width || '12'}
      height={height || '12'}
      fill={fill || 'black'}
      className={additionalClasses || ''}
      aria-hidden="true"
    >
      <path d="M6 4l20 12-20 12z"></path>
    </svg>
  );
}

Play.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
