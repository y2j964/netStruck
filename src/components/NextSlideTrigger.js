import React from 'react';
import PropTypes from 'prop-types';
import ChevronRight from '../icons/ChevronRight';

export default function NextSlideTrigger({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className='chevron-arrow opacity-0'
      aria-label='next-slide'
    >
      <ChevronRight />
    </button>
  );
}

NextSlideTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
