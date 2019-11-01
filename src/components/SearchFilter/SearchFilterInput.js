import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function SearchFilterInput({ handleChange, value }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <input
      type='search'
      role='searchbox'
      placeholder='Search NetStruck'
      className='search-filter__input input-stripped placeholder-color'
      id='searchInput'
      onChange={handleChange}
      value={value}
      ref={ref}
    />
  );
}

SearchFilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
