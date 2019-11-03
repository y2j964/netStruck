import React from 'react';
import PropTypes from 'prop-types';
import { tabListDataTypes } from './types';
import Tab from './Tab';

export default function TabList({
  tabListData,
  activateTab,
  activatePrevTab,
  activateNextTab,
}) {
  const tabListFrags = tabListData.map((entry, index) => (
    <Tab
      key={entry.id}
      id={entry.id}
      index={index}
      isActive={entry.isActive}
      text={entry.text}
      handleClick={activateTab}
    >
      {entry.icon}
    </Tab>
  ));

  const handleKeyDown = e => {
    const key = e.key || e.code;
    if (key === 'ArrowLeft') {
      activatePrevTab();
      return;
    }
    if (key === 'ArrowRight') {
      activateNextTab();
    }
  };
  return (
    <div className='sm:pt-4 border-b border-gray-700'>
      <ol
        className='flex justify-center'
        role='tablist'
        onKeyDown={handleKeyDown}
      >
        {tabListFrags}
      </ol>
    </div>
  );
}

TabList.propTypes = {
  tabListData: PropTypes.arrayOf(tabListDataTypes).isRequired,
  activateTab: PropTypes.func.isRequired,
  activatePrevTab: PropTypes.func.isRequired,
  activateNextTab: PropTypes.func.isRequired,
};
