import React from 'react';
import PropTypes from 'prop-types';

export default function RadioInputCustom({
  name,
  id,
  value,
  isChecked,
  handleCheckChange,
  subscription,
}) {
  return (
    <span
      className={`custom-radio${
        subscription === value ? ' custom-radio--is-active' : ''
      }`}
    >
      <input
        type='radio'
        name={name}
        value={value}
        className='hidden-input'
        id={id}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={handleCheckChange}
      />
      <span className='hidden-input__focus-mask'></span>
    </span>
  );
}

RadioInputCustom.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  subscription: PropTypes.string.isRequired,
};
