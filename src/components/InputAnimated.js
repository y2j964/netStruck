import React from 'react';
import PropTypes from 'prop-types';

export function InputAnimated({
  labelText,
  type,
  name,
  id,
  isRequired,
  minLength,
  value,
  handleValueChange,
  isFocused,
  handleFocus,
  handleBlur,
}) {
  return (
    <div className='user-info__form-group'>
      <label
        htmlFor={id}
        className={`animated-label${
          isFocused || value ? ' animated-label--is-shrunk' : ''
        }`}
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        className='user-info__input'
        id={id}
        aria-required={isRequired}
        required={isRequired}
        minLength={minLength}
        value={value}
        onChange={handleValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export const AnimatedTextInput = props => <InputAnimated {...props} type='text' />
export const AnimatedEmailInput = props => <InputAnimated {...props} type='email' />
export const AnimatedPasswordInput = props => <InputAnimated {...props} type='password'/>

InputAnimated.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  minLength: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
