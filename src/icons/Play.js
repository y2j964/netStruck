import React from 'react';

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
      aria-labelledby='title'
    >
      <title>play3</title>
      <path fill={playFill} d='M6 4l20 12-20 12z'></path>
    </svg>
  );
}
