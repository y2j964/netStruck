const step = 100;

const getActiveSlideIndexes = (
  updatedXPosition,
  slideWidth,
  slidesPerPosition,
) => {
  const cloneOffsets = slidesPerPosition;
  const activeSlides = [];
  for (let i = 0; i < slidesPerPosition; i += 1) {
    const slideIndex =
      Math.floor(-updatedXPosition / slideWidth) -
      slidesPerPosition +
      cloneOffsets +
      i;
    activeSlides.push(slideIndex);
  }
  return activeSlides;
};

const getLeftMostSlideIndex = (
  prevSlidesPerPosition,
  visibleSlideIndexes,
  updatedSlidesPerPosition,
) => {
  if (visibleSlideIndexes.length > 0) {
    const leftMostSlideIndex = visibleSlideIndexes[0];
    // we'll want the change in clones to factor into the new layout
    const cloneAdjustment = prevSlidesPerPosition - updatedSlidesPerPosition;
    const adjustedLeftMostSlideIndex = leftMostSlideIndex - cloneAdjustment;
    return adjustedLeftMostSlideIndex;
  }
  return updatedSlidesPerPosition;
};

// 'natural' here is to be understood as slides that aren't cloned
const getNaturalEndingSlideIndexes = (
  genreLength,
  updatedSlidesPerPosition,
) => {
  const cloneOffset = updatedSlidesPerPosition;
  const clonedEndingLeftMostIndex = genreLength + cloneOffset;
  // last position before cloned series
  const naturalEndingLeftMostIndex =
    genreLength + cloneOffset - updatedSlidesPerPosition;
  const naturalEndingSlideIndexes = [];
  for (
    let i = naturalEndingLeftMostIndex;
    i < clonedEndingLeftMostIndex;
    i += 1
  ) {
    const slideIndex = i;
    naturalEndingSlideIndexes.push(slideIndex);
  }
  return naturalEndingSlideIndexes;
};

const getLeftAlignedSlideIndexes = (
  leftMostSlideIndex,
  updatedSlidePerPosition,
) => {
  const leftAlignedSlideIndexes = [];
  for (
    let i = leftMostSlideIndex;
    i < leftMostSlideIndex + updatedSlidePerPosition;
    i += 1
  ) {
    const slideIndex = i;
    leftAlignedSlideIndexes.push(slideIndex);
  }
  return leftAlignedSlideIndexes;
};

const getResizedSlideIndexes = (
  prevSlidesPerPosition,
  updatedSlidesPerPosition,
  visibleSlideIndexes,
  genreLength,
) => {
  const cloneOffset = updatedSlidesPerPosition;
  const naturalEndingLeftMostIndex =
    genreLength + cloneOffset - updatedSlidesPerPosition;
  const leftMostSlideIndex = getLeftMostSlideIndex(
    prevSlidesPerPosition,
    visibleSlideIndexes,
    updatedSlidesPerPosition,
  );
  // on resize, we want to maintain the left-most slide
  // if the left-most slide doesn't support a wider viewport (i.e. you end up wrapping
  // the ending and beginning slides), just use last position
  if (leftMostSlideIndex > naturalEndingLeftMostIndex) {
    const naturalEndingSlideIndexes = getNaturalEndingSlideIndexes(
      genreLength,
      updatedSlidesPerPosition,
    );
    return naturalEndingSlideIndexes;
  }
  const resizedSlideIndexes = getLeftAlignedSlideIndexes(
    leftMostSlideIndex,
    updatedSlidesPerPosition,
  );
  return resizedSlideIndexes;
};

const getResizedXPosition = (
  prevSlidesPerPosition,
  updatedSlidesPerPosition,
  updatedVisibleSlideIndexes,
  genreLength,
) => {
  const slideWidth = step / updatedSlidesPerPosition;
  const cloneOffset = updatedSlidesPerPosition;
  const naturalEndingLeftMostIndex =
    genreLength + cloneOffset - updatedSlidesPerPosition;
  const leftMostSlideIndex = getLeftMostSlideIndex(
    prevSlidesPerPosition,
    updatedVisibleSlideIndexes,
    updatedSlidesPerPosition,
  );
  if (leftMostSlideIndex > naturalEndingLeftMostIndex) {
    const endPositionX = -slideWidth * naturalEndingLeftMostIndex;
    return endPositionX;
  }
  // maintain position respective to previous leftMostSlide
  const updatedXPosition =
    (leftMostSlideIndex - updatedSlidesPerPosition) * -slideWidth - 100;
  return updatedXPosition;
};

const filmDataReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_SLIDER_BACKWARD': {
      const slideWidth = step / state.slidesPerPosition;

      if (state.xPosition > -step) {
        // prevents slider from sliding off tracks; endPositionX - step is the clones at the end
        return state;
      }
      // if prevState.xPosition % 100 isn't equal to zero, there is a remainder,
      // indicating oddly displaced slides (remaining slides)
      if (state.xPosition % 100 !== 0 && state.xPosition > -200) {
        // put slider back on regular track at the first position;
        const updatedXPosition = -step;
        const updatedSlideIndexes = getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
          state.slidesPerPosition,
        );
        return {
          ...state,
          transition: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }

      // if slider is at starting position, prepare for wrapAround
      if (state.xPosition === -step) {
        const updatedXPosition = state.xPosition + step;
        return { ...state, transition: true, xPosition: updatedXPosition };
      }

      // normal slider movement
      const updatedXPosition = state.xPosition + step;
      const updatedSlideIndexes = getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
        state.slidesPerPosition,
      );
      return {
        ...state,
        transition: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'MOVE_SLIDER_FORWARD': {
      const slideWidth = step / state.slidesPerPosition;
      const naturalEndPositionX = -slideWidth * action.id;

      if (state.xPosition === naturalEndPositionX - step) {
        // prevents slider from sliding off tracks; naturalEndPositionX - step is the clones at the end
        return state;
      }

      // if xPosition has less than a full movement toward the end, do partial movement to end
      if (
        state.xPosition < naturalEndPositionX + step &&
        state.xPosition > naturalEndPositionX
      ) {
        const updatedXPosition = naturalEndPositionX;
        const updatedSlideIndexes = getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
          state.slidesPerPosition,
        );
        return {
          ...state,
          transition: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }

      // if slider is at ending position, prepare for wrapAround
      if (state.xPosition === naturalEndPositionX) {
        const updatedXPosition = state.xPosition - step;
        return { ...state, transition: true, xPosition: updatedXPosition };
      }

      // normal slider movement
      const updatedXPosition = state.xPosition - step;
      const updatedSlideIndexes = getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
        state.slidesPerPosition,
      );
      return {
        ...state,
        transition: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'WRAP_AROUND': {
      const slideWidth = step / state.slidesPerPosition;
      const naturalEndPositionX = -slideWidth * action.id;

      if (state.xPosition === 0) {
        const updatedSlideIndexes = getActiveSlideIndexes(
          naturalEndPositionX,
          slideWidth,
          state.slidesPerPosition,
        );
        return {
          ...state,
          transition: false,
          xPosition: naturalEndPositionX,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }

      if (state.xPosition === naturalEndPositionX - step) {
        const updatedSlideIndexes = getActiveSlideIndexes(
          -step,
          slideWidth,
          state.slidesPerPosition,
        );
        return {
          ...state,
          transition: false,
          xPosition: -step,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }
      return { ...state };
    }

    case 'RECALIBRATE_SLIDER': {
      const updatedVisibleSlideIndexes = getResizedSlideIndexes(
        state.slidesPerPosition,
        action.id.updatedSlidesPerPosition,
        state.visibleSlideIndexes,
        action.id.genreLength,
      );
      const updatedXPosition = getResizedXPosition(
        state.slidesPerPosition,
        action.id.updatedSlidesPerPosition,
        state.visibleSlideIndexes,
        action.id.genreLength,
      );

      return {
        ...state,
        slidesPerPosition: action.id.updatedSlidesPerPosition,
        visibleSlideIndexes: updatedVisibleSlideIndexes,
        xPosition: updatedXPosition,
      };
    }

    default:
      return state;
  }
};

export default filmDataReducer;
