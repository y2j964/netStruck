import React from 'react';

// props.children will be a unique svg component passed in to the button

export default function TabSwitch(props) {
  return (
    <li
      onClick={props.handleClick.bind(this, props.tabSwitch)}
      className={`tab-switch ${
        props.tabSwitch.isActive ? 'tab-switch--is-active' : ''
      }`}
    >
      <button className={`mb-3 ${props.tabSwitch.btnClasses}`}>
        {props.children}
      </button>
      <span className='tab-switch__text'>{props.tabSwitch.text}</span>
    </li>
  );
}
