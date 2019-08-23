import React from 'react';
import PropTypes from 'prop-types';

export default function SortingDirectionArrows({ svgClassName }) {
  return (
    <svg
      viewBox='0 0 32 32'
      width='18'
      height='18'
      aria-hidden='true'
      className={svgClassName}
    >
      <path d='M31.998 24h-24.006v4l-7.992-6 7.992-6v4h24.006zM0 12h23.998v4l8-6-8-6v4h-23.998z'></path>
    </svg>
  );
}

SortingDirectionArrows.propTypes = {
  svgClassName: PropTypes.string,
};
