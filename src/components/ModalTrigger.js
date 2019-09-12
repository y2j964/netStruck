import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../icons/SearchIcon';

export default function ModalTrigger({ handleClick }) {
  return (
    <button aria-label='search for film' onClick={handleClick}>
      <SearchIcon fill='#fff' />
    </button>
  );
}

ModalTrigger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
