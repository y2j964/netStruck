import React from 'react';
import PropTypes from 'prop-types';
import ChevronRight from '../icons/ChevronRight';

export default function NextSlideTrigger({ handleClick, classes, ariaLabel }) {
  return (
    <button onClick={handleClick} className={classes} aria-label={ariaLabel}>
      <ChevronRight />
    </button>
  );
}

NextSlideTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};
