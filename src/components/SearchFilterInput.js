import React from 'react';
import PropTypes from 'prop-types';

export default function SearchFilterInput({ handleChange }) {
  return (
    <input
      type='search'
      role='searchbox'
      placeholder='Search NetStruck'
      className='search-filter__input input-stripped placeholder-color'
      id='searchInput'
      onChange={handleChange}
    />
  );
}

SearchFilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
