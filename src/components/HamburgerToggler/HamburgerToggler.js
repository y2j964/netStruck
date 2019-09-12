import React from 'react';
import PropTypes from 'prop-types';
import HamburgerToggle from '../../icons/HamburgerToggle';

export default function HamburgerToggler({
  controls,
  collapsibleNavIsExpanded,
  handleClick,
}) {
  return (
    <button
      className='hamburger-toggler'
      onClick={handleClick}
      aria-label='toggle collapsible navigation menu'
      aria-controls={controls}
      aria-expanded={collapsibleNavIsExpanded}
    >
      <HamburgerToggle />
    </button>
  );
}

HamburgerToggler.propTypes = {
  controls: PropTypes.string.isRequired,
  collapsibleNavIsExpanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
