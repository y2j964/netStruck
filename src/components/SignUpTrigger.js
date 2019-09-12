import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SignUpTrigger({ handleClick }) {
  return (
    <Link
      to={'/signup'}
      className='text-white mr-5 font-semibold block'
      onClick={handleClick}
    >
      SIGN UP
    </Link>
  );
}

SignUpTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
