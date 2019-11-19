import React, { useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import { useMediaBreakpointState } from '../../MediaBreakpointContext';
import sliderRowReducer from './sliderRowReducer';
import InfiniteTileGroup from '../Tiles/InfiniteTileGroup';
import EmptyTileGroup from '../Tiles/EmptyTileGroup';
import NextSlideTrigger from '../NextSlideTrigger';
import PreviousSlideTrigger from '../PreviousSlideTrigger';
import useIsIntersecting from '../../utilityFunctions/useIsIntersecting';

export default function SliderRow({ filmGroupData }) {
  const [state, dispatch] = useReducer(sliderRowReducer, {
    isWrapping: false,
    tilesPerPosition: 0,
    xPosition: 0,
    visibleSlideIndexes: [],
  });

  const transitionEnded = useRef(true);

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

  const updatedSlidesPerPosition = useMediaBreakpointState();

  useEffect(() => {
    // the slider will jump if the user clicks right before the penultimate position's
    // transition ends; this ensures that doesn't happen; also doesn't cause re-render
    setTimeout(() => {
      transitionEnded.current = true;
    }, 750);
  }, [state.xPosition]);

  const handleClick = callback => {
    if (transitionEnded.current) {
      transitionEnded.current = false;
      callback();
    }
  };

  // run getUpdatedTilesPerPosition when windowWidth changes
  useEffect(() => {
    const recalibrateSlider = updatedTilesPerPosition => {
      dispatch({
        type: 'RECALIBRATE_SLIDER',
        id: { updatedTilesPerPosition, genreLength: filmGroupData.length },
      });
    };
    recalibrateSlider(updatedSlidesPerPosition);
  }, [updatedSlidesPerPosition, filmGroupData.length, state.tilesPerPosition]);

  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref);

  return (
    <div className="slider-row relative w-full h-full" ref={ref}>
      <div className="slider-row__content-preview slider-row__content-preview--left">
        <PreviousSlideTrigger
          handleClick={() => handleClick(moveSliderBackward)}
          classes="slider-row__btn"
          svgClasses="slider-row__chevron"
          ariaLabel="slide previous films into view"
        />
      </div>
      {!isIntersecting ? (
        <EmptyTileGroup numOfTiles={7} />
      ) : (
        <InfiniteTileGroup
          filmGroupData={filmGroupData}
          {...state}
          wrapAround={wrapAround}
        />
      )}
      <div className="slider-row__content-preview slider-row__content-preview--right">
        <NextSlideTrigger
          handleClick={() => handleClick(moveSliderForward)}
          classes="slider-row__btn"
          svgClasses="slider-row__chevron"
          ariaLabel="slide next films into view"
        />
      </div>
    </div>
  );
}

SliderRow.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes),
};
