import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from '../icons/ChevronLeft';

export default function PreviousSlideTrigger({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className='chevron-arrow opacity-0'
      aria-label='previous-slide'
    >
      <ChevronLeft />
    </button>
  );
}

PreviousSlideTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
