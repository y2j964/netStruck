import React from 'react';
import PropTypes from 'prop-types';
import TabSwitch from './TabSwitch';

export default function TabSwitches({ tabSwitches, activateTab }) {
  const tabSwitchFrags = tabSwitches.map(entry => (
    <TabSwitch
      key={entry.id}
      id={entry.id}
      isActive={entry.isActive}
      text={entry.text}
      handleClick={activateTab}
    >
      {entry.icon}
    </TabSwitch>
  ));
  return (
    <div className='pt-4 border-b border-gray-700'>
      <ol className='flex justify-center' aria-hidden='true'>
        {tabSwitchFrags}
      </ol>
    </div>
  );
}

TabSwitches.propTypes = {
  tabSwitches: PropTypes.array.isRequired,
  // renderItem: PropTypes.func.isRequired,
  activateTab: PropTypes.func.isRequired,
};
