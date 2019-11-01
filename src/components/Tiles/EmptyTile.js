import React from 'react';
import PropTypes from 'prop-types';

export default function EmptyTile({ index }) {
  return (
    <li
      style={{ animation: `3.6s ease-in-out ${200 * index}ms pulse infinite` }}
      className='tile tile--is-empty'
    >
      <span className='ratio-16-9'></span>
    </li>
  );
}

EmptyTile.propTypes = {
  index: PropTypes.number.isRequired,
}