import React from 'react';
import PropTypes from 'prop-types';

export default function TabSwitch(props) {
  return (
    <li
      className={`tab-switch ${
        props.tabSwitch.isActive ? 'tab-switch--is-active' : ''
      }`}
    >
      <button
        onClick={props.handleClick.bind(this, props.tabSwitch)}
        className={'tab-switch__btn'}
        tabIndex='-1'
      >
        {props.children}
        <span className='tab-switch__text'>{props.tabSwitch.text}</span>
      </button>
    </li>
  );
}

TabSwitch.propTypes = {
  handleClick: PropTypes.func.isRequired,
  tabSwitch: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
