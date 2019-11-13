import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from '../icons/ChevronLeft';

export default function PreviousSlideTrigger({
  handleClick,
  classes,
  svgClasses,
  ariaLabel,
}) {
  return (
    <button onClick={handleClick} className={classes} aria-label={ariaLabel}>
      <ChevronLeft additionalClasses={svgClasses}/>
    </button>
  );
}

PreviousSlideTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  svgClasses: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};
