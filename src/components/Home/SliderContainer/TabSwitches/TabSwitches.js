import React from 'react';
import PropTypes from 'prop-types';
import TabSwitch from './TabSwitch';

export default function TabSwitches(props) {
  const tabSwitchFrags = props.tabSwitches.map(entry => (
    <TabSwitch key={entry.id} tabSwitch={entry} handleClick={props.activateTab}>
      {entry.icon}
    </TabSwitch>
  ));
  return (
    <div className='pt-4 border-b border-gray-700'>
      <ul className='flex justify-center' aria-hidden='true'>
        {tabSwitchFrags}
      </ul>
    </div>
  );
}

TabSwitches.propTypes = {
  tabSwitches: PropTypes.array.isRequired,
  // renderItem: PropTypes.func.isRequired,
  activateTab: PropTypes.func.isRequired,
};
