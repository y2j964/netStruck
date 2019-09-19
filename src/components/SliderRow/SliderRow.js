import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import sliderRowReducer from './sliderRowReducer';
import TileGroup from '../Tiles/TileGroup';
import NextSlideTrigger from '../NextSlideTrigger';
import PreviousSlideTrigger from '../PreviousSlideTrigger';
import debounce from '../../utilityFunctions/debounce';

const mediaBreakpoints = {
  sm: 500,
  md: 800,
  lg: 1100,
  xl: 1400,
};

const resizeSlider = (windowWidth, slidesPerPosition, callback) => {
  // console.log('resize');
  switch (true) {
    case windowWidth < mediaBreakpoints.sm && slidesPerPosition !== 2: {
      const updatedSlidesPerPosition = 2;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.sm &&
      windowWidth < mediaBreakpoints.md &&
      slidesPerPosition !== 3: {
      const updatedSlidesPerPosition = 3;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.md &&
      windowWidth < mediaBreakpoints.lg &&
      slidesPerPosition !== 4: {
      const updatedSlidesPerPosition = 4;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.lg &&
      windowWidth < mediaBreakpoints.xl &&
      slidesPerPosition !== 5: {
      const updatedSlidesPerPosition = 5;
      callback(updatedSlidesPerPosition);
      break;
    }
    case windowWidth > mediaBreakpoints.xl && slidesPerPosition !== 6: {
      const updatedSlidesPerPosition = 6;
      callback(updatedSlidesPerPosition);
      break;
    }
    default:
  }
};

export default function SliderRow({ category, filmGroupData }) {
  // const [slidesPerPosition, setSlidesPerPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth,
  );
  const [state, dispatch] = useReducer(sliderRowReducer, {
    transition: false,
    slidesPerPosition: 0,
    xPosition: 0,
    visibleSlideIndexes: [],
  });

  // console.log('resize');
  // console.log('sliderRow render', state, filmGroupData);

  const moveSliderBackward = () =>
    dispatch({
      type: 'MOVE_SLIDER_BACKWARD',
      id: filmGroupData.length,
    });

  const moveSliderForward = () =>
    dispatch({
      type: 'MOVE_SLIDER_FORWARD',
      id: filmGroupData.length,
    });

  const wrapAround = () =>
    dispatch({ type: 'WRAP_AROUND', id: filmGroupData.length });

  const handleResize = () => {
    setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
  };

  // add/remove resize event on mount/unmount
  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // run resizeSlider when windowWidth changes
  useEffect(() => {
    const recalibrateSlider = updatedSlidesPerPosition => {
      dispatch({
        type: 'RECALIBRATE_SLIDER',
        id: { updatedSlidesPerPosition, genreLength: filmGroupData.length },
      });
    };
    resizeSlider(windowWidth, state.slidesPerPosition, recalibrateSlider);
  }, [windowWidth, filmGroupData.length, state.slidesPerPosition]);

  return (
    <div className='slider-row relative w-full h-full'>
      <div className='slider-row__content-preview slider-row__content-preview--left'>
        <PreviousSlideTrigger
          handleClick={moveSliderBackward}
          classes='slider-row__btn'
          ariaLabel='slide previous films into view'
        />
      </div>
      <TileGroup
        filmGroupData={filmGroupData}
        {...state}
        category={category}
        wrapAround={wrapAround}
      />
      <div className='slider-row__content-preview slider-row__content-preview--right'>
        <NextSlideTrigger
          handleClick={moveSliderForward}
          classes='slider-row__btn'
          ariaLabel='slide next films into view'
        />
      </div>
    </div>
  );
}

SliderRow.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
