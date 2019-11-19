import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronLeft({
  width,
  height,
  fill,
  additionalClasses,
}) {
  return (
    <svg
      viewBox="0 0 21 28"
      width={width || '25'}
      height={height || '25'}
      fill={fill || '#f7fafc'}
      className={additionalClasses || ''}
      aria-hidden="true"
    >
      <path d="M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
    </svg>
  );
}

ChevronLeft.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
