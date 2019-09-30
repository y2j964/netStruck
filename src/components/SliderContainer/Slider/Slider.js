import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slides from './Slides';
import useIsIntersecting from '../../../utilityFunctions/useIsIntersecting';

const options = {
  root: null,
  rootMargin: '0px 0px 300px 0px',
  threshold: 0.5,
};

export default function Slider({ sliderSwitches }) {
  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref, options);

  // the classnames start at index 1, so add 1 to found active index to translate
  const sliderPosition =
    sliderSwitches.findIndex(sliderSwitch => sliderSwitch.isActive === true) +
    1;

  return (
    <div className='l-slider' ref={ref}>
      <div className={`slider slider--position-${sliderPosition}`}>
        {!isIntersecting ? null : <Slides />}
      </div>
    </div>
  );
}

Slider.propTypes = {
  sliderSwitches: PropTypes.array.isRequired,
};
