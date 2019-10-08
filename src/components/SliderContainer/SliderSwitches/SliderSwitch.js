import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SliderSwitch = ({ id, isActive, text, handleClick, children }) => {
  return (
    <li
      className={`slider-switch ${isActive ? 'slider-switch--is-active' : ''}`}
    >
      <button
        onClick={handleClick.bind(this, id)}
        tabIndex='-1'
      >
        <div className={'slider-switch-content'}>
        {children}
        <span className='slider-switch-content__text'>{text}</span>
        </div>
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
