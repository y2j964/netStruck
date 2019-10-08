import React from 'react';
import PropTypes from 'prop-types';
import SliderSwitch from './SliderSwitch';

export default function SliderSwitches({ sliderSwitches, activateTab }) {
  const sliderSwitchFrags = sliderSwitches.map(entry => (
    <SliderSwitch
      key={entry.id}
      id={entry.id}
      isActive={entry.isActive}
      text={entry.text}
      handleClick={activateTab}
    >
      {entry.icon}
    </SliderSwitch>
  ));
  return (
    <div className='sm:pt-4 border-b border-gray-700'>
      <ol className='flex justify-center' aria-hidden='true'>
        {sliderSwitchFrags}
      </ol>
    </div>
  );
}

SliderSwitches.propTypes = {
  sliderSwitches: PropTypes.array.isRequired,
  // renderItem: PropTypes.func.isRequired,
  activateTab: PropTypes.func.isRequired,
};
