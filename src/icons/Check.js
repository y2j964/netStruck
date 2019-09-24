import React from 'react';
import PropTypes from 'prop-types';

export default function Check({ width, height, fill }) {
  return (
    <svg
      viewBox='0 0 20 20'
      width={width || '15'}
      height={height || '15'}
      fill={fill || 'white'}
      aria-hidden='true'
    >
      <path d='M0 11l2-2 5 5 11-11 2 2-13 13z'></path>
    </svg>
  );
}

Check.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};
