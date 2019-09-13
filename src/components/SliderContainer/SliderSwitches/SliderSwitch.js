import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SliderSwitch = ({ id, isActive, text, handleClick, children }) => {
  return (
    <li
      className={`slider-switch ${isActive ? 'slider-switch--is-active' : ''}`}
    >
      <button
        onClick={handleClick.bind(this, id)}
        className={'slider-switch__btn'}
        tabIndex='-1'
      >
        {children}
        <span className='slider-switch__text'>{text}</span>
      </button>
    </li>
  );
};

SliderSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default memo(SliderSwitch);
