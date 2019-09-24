import React from 'react';
import PropTypes from 'prop-types';
import SearchGlass from '../icons/SearchGlass';

export default function ModalTrigger({ handleClick }) {
  return (
    <button aria-label='search for film' onClick={handleClick}>
      <SearchGlass fill='#fff' />
    </button>
  );
}

ModalTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
