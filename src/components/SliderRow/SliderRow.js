import React, { useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import sliderRowReducer from './sliderRowReducer';
import InfiniteTileGroup from '../Tiles/InfiniteTileGroup';
import EmptyTileGroup from '../Tiles/EmptyTileGroup';
import NextSlideTrigger from '../NextSlideTrigger';
import PreviousSlideTrigger from '../PreviousSlideTrigger';
import useWindowWidth from '../../utilityFunctions/useWindowWidth';
import useIsIntersecting from '../../utilityFunctions/useIsIntersecting';
import getUpdatedTilesPerPosition from '../../utilityFunctions/getUpdatedTilesPerPosition';

export default function SliderRow({ filmGroupData }) {
  const [state, dispatch] = useReducer(sliderRowReducer, {
    transition: false,
    tilesPerPosition: 0,
    xPosition: 0,
    visibleSlideIndexes: [],
  });

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

  const windowWidth = useWindowWidth();

  // run getUpdatedTilesPerPosition when windowWidth changes
  useEffect(() => {
    const recalibrateSlider = updatedTilesPerPosition => {
      dispatch({
        type: 'RECALIBRATE_SLIDER',
        id: { updatedTilesPerPosition, genreLength: filmGroupData.length },
      });
    };
    getUpdatedTilesPerPosition(windowWidth, state.tilesPerPosition).then(res =>
      recalibrateSlider(res),
    );
  }, [windowWidth, filmGroupData.length, state.tilesPerPosition]);

  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref);

  return (
    <div className='slider-row relative w-full h-full' ref={ref}>
      <div className='slider-row__content-preview slider-row__content-preview--left'>
        <PreviousSlideTrigger
          handleClick={moveSliderBackward}
          classes='slider-row__btn'
          ariaLabel='slide previous films into view'
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
};
