import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TabSwitch = ({ id, isActive, text, handleClick, children }) => {
  return (
    <li className={`tab-switch ${isActive ? 'tab-switch--is-active' : ''}`}>
      <button
        onClick={handleClick.bind(this, id)}
        className={'tab-switch__btn'}
        tabIndex='-1'
      >
        {children}
        <span className='tab-switch__text'>{text}</span>
      </button>
    </li>
  );
};

TabSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default memo(TabSwitch);
