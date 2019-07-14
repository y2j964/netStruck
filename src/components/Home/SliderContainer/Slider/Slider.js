import React from 'react';
import PropTypes from 'prop-types';
// import Slides from './Slides';

export default function Slider(props) {
  // the classnames start at index 1, so add 1 to found active index to translate
  const sliderPosition =
    props.tabSwitches.findIndex(tabSwitch => tabSwitch.isActive === true) + 1;
  return (
    <div className='l-slider'>
      <div className={`slider slider--position-${sliderPosition}`}>
        {props.render()}
      </div>
    </div>
  );
}

Slider.propTypes = {
  render: PropTypes.func.isRequired,
  tabSwitches: PropTypes.array.isRequired,
};
