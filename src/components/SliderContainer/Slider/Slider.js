import React from 'react';
import PropTypes from 'prop-types';
import Slides from './Slides';

export default function Slider({ sliderSwitches }) {
  // the classnames start at index 1, so add 1 to found active index to translate
  const sliderPosition =
    sliderSwitches.findIndex(sliderSwitch => sliderSwitch.isActive === true) +
    1;
  return (
    <div className='l-slider'>
      <div className={`slider slider--position-${sliderPosition}`}>
        <Slides />
      </div>
    </div>
  );
}

Slider.propTypes = {
  sliderSwitches: PropTypes.array.isRequired,
};
