import React from 'react';
import PropTypes from 'prop-types';

export default function CheckBox({
  children,
  name,
  id,
  isChecked,
  handleCheckChange,
}) {
  return (
    <div className='mb-6'>
      <input
        type='checkbox'
        name={name}
        className='mr-2'
        id={id}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={handleCheckChange}
      />
      <label className='text-sm' htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
};
