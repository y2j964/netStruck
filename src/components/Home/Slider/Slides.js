import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import SlideCentered from './SlideCentered';

export default function Slides(props) {
  const slides = props.slideData.map(entry => <Slide slide={entry} />);
  const slidesCentered = props.slideCenteredData.map(entry => (
    <SlideCentered slide={entry} />
  ));
  return (
    <React.Fragment>
      {slides}
      {slidesCentered}
    </React.Fragment>
  );
}

Slides.propTypes = {
  slideData: PropTypes.array.isRequired,
  slideCenteredData: PropTypes.array.isRequired,
};
