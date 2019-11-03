/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from '../../icons/ChevronDown';

export default function SelectCustom({
  options,
  name,
  id,
  controls,
  sortBy,
  handleChange,
}) {
  const optionFrags = options.map(option => (
    <option
      key={option.id}
      className='text-black uppercase'
      value={option.value}
      aria-selected={sortBy === option.value && 'true'}
    >
      {option.text}
    </option>
  ));

  return (
    <div className='l-select-custom'>
      <label htmlFor='allFilmsSorter' className='sr-only'>
        Select Sort Criterion
      </label>
      <select
        name={name}
        id={id}
        aria-controls={controls}
        value={sortBy}
        className='select-custom'
        onChange={handleChange}
      >
        {optionFrags}
      </select>
      <ChevronDown additionalClasses='icon--positioned-right z-10' />
    </div>
  );
}

SelectCustom.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  controls: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
