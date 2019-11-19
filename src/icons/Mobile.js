import React from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ width, height, fill }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={width || '35'}
      height={height || '55'}
      fill={fill || '#fff'}
      aria-hidden="true"
    >
      <path d="M24 0h-18c-1.1 0-2 0.9-2 2v28c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-28c0-1.1-0.9-2-2-2zM15 30.556c-0.859 0-1.556-0.697-1.556-1.556s0.697-1.556 1.556-1.556 1.556 0.697 1.556 1.556-0.697 1.556-1.556 1.556zM24 26h-18v-22h18v22z"></path>
    </svg>
  );
}

Mobile.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};
