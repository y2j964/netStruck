import React from 'react'
import PropTypes from 'prop-types';

export default function PlayBox({ width, height, additionalClasses }) {
  return (
    <svg width={width || "98"} height={height || "55"} viewBox="0 0 98 55" aria-hidden='true' className={additionalClasses || ''}><path fill="none" stroke="#fff" strokeWidth="1.212" d="M.606.606h96.787v53.788H.606z"/><path d="M130.59 139.341H90.149l10.11-17.512 10.11-17.511 10.11 17.511z" transform="matrix(0 .45271 -.45746 0 108.028 -22.465)" stroke="#fff" fill='#fff' strokeWidth="1.455"/></svg>
  )
}

PlayBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  additionalClasses: PropTypes.string,
};