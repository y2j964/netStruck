import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SignUpTrigger({ handleClick }) {
  return (
    <NavLink
      to={'/signup'}
      className='navbar__link mr-5'
      activeClassName={'navbar__link--is-active'}
      onClick={handleClick}
    >
      SIGN UP
    </NavLink>
  );
}

SignUpTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
