import React from 'react';
import PropTypes from 'prop-types';
import Slides from './Slides';

export default function Slider({ tabSwitches }) {
  // the classnames start at index 1, so add 1 to found active index to translate
  const sliderPosition =
    tabSwitches.findIndex(tabSwitch => tabSwitch.isActive === true) + 1;
  return (
    <div className='l-slider'>
      <div className={`slider slider--position-${sliderPosition}`}>
        <Slides />
      </div>
    </div>
  );
}

Slider.propTypes = {
  tabSwitches: PropTypes.array.isRequired,
};
