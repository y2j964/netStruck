import React from 'react';
import PropTypes from 'prop-types';

export default function playIcon(props) {
  const playWidth = props.playWidth || '10';
  const playHeight = props.playHeight || '10';
  const playFill = props.playFill || 'black';
  return (
    <svg
      width={playWidth}
      height={playHeight}
      viewBox='0 0 32 32'
      className={props.svgClassName}
      aria-hidden='true'
    >
      <path fill={playFill} d='M6 4l20 12-20 12z'></path>
    </svg>
  );
}

playIcon.propTypes = {
  playWidth: PropTypes.string.isRequired,
  playFill: PropTypes.string.isRequired,
  playHeight: PropTypes.string.isRequired,
  svgClassName: PropTypes.string.isRequired,
};
