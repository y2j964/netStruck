import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from '../icons/ChevronLeft';

export default function PreviousSlideTrigger({
  handleClick,
  classes,
  ariaLabel,
}) {
  return (
    <button onClick={handleClick} className={classes} aria-label={ariaLabel}>
      <ChevronLeft />
    </button>
  );
}

PreviousSlideTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};
