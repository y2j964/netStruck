import React from 'react';
import PropTypes from 'prop-types';
import SortingDirectionArrows from '../../icons/SortingDirectionArrows';

export default function SortDirectionToggle({
  controls,
  sortIsAscending,
  handleClick,
}) {
  return (
    <button
      className='sort-direction-toggle'
      aria-label='toggle sort direction'
      aria-describedby='sortDirDesc'
      aria-controls={controls}
      onClick={handleClick}
    >
      <span
        className='sr-only'
        id='sortDirDesc'
        aria-live='polite'
      >{`Sort direction is currently ${
        sortIsAscending ? 'ascending' : 'descending'
      }`}</span>
      <SortingDirectionArrows additionalClasses='sort-direction-toggle__svg' />
    </button>
  );
}

SortDirectionToggle.propTypes = {
  controls: PropTypes.string.isRequired,
  sortIsAscending: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
