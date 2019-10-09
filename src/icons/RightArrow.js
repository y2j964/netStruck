import React from 'react';
import PropTypes from 'prop-types';

export default function RightArrow({ width, height, fill, additionalClasses }) {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      fill={fill || '#000'}
      viewBox='0 0 20 20'
      aria-hidden='true'
      className={additionalClasses || ''}
    >
      <path d='M14 15.5v-3.5h-13v-4h13v-3.5l5.25 5.5-5.25 5.5z'></path>
    </svg>
  );
}

RightArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
