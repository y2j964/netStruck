import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ id, isActive, index, text, handleClick, children }) => {
  const ref = useRef();
  useEffect(() => {
    if (!isActive) {
      return;
    }
    ref.current.focus();
  }, [isActive]);

  return (
    <li className={`l-tab ${isActive ? 'l-tab--is-active' : ''}`}>
      <button
        className='w-full'
        id={`tab-${index + 1}`}
        onClick={() => handleClick(id)}
        tabIndex={isActive ? '0' : '-1'}
        role='tab'
        aria-selected={isActive}
        aria-controls={`tab-panel-${index + 1}`}
        ref={ref}
      >
        <div className={'tab'}>
          {children}
          <span className='tab__text'>{text}</span>
        </div>
      </button>
    </li>
  );
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Tab;
