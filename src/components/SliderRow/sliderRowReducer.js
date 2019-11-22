const step = 100;

const getSlideWidth = tilesPerPosition => step / tilesPerPosition;

const getActiveSlideIndexes = (
  updatedXPosition,
  slideWidth,
  tilesPerPosition
) => {
  const activeSlides = [];
  for (let i = 0; i < tilesPerPosition; i += 1) {
    const slideIndex = Math.floor(-updatedXPosition / slideWidth) + i;
    activeSlides.push(slideIndex);
  }
  return activeSlides;
};

const getLeftMostSlideIndex = (
  prevTilesPerPosition,
  visibleSlideIndexes,
  updatedTilesPerPosition
) => {
  if (visibleSlideIndexes.length > 0) {
    const leftMostSlideIndex = visibleSlideIndexes[0];
    // we'll want the change in clones to factor into the new layout
    const cloneAdjustment = prevTilesPerPosition - updatedTilesPerPosition;
    const adjustedLeftMostSlideIndex = leftMostSlideIndex - cloneAdjustment;
    return adjustedLeftMostSlideIndex;
  }
  // if visibleSlideIndexes hasn't been calculated yet, just return updatedTilesPerPosition
  return updatedTilesPerPosition;
};

// 'natural' here is to be understood as slides that aren't cloned
const getNaturalEndingSlideIndexes = (genreLength, updatedTilesPerPosition) => {
  const clonedEndingLeftMostIndex = genreLength + updatedTilesPerPosition;
  // last position before cloned series
  const naturalEndingLeftMostIndex = genreLength;
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
  updatedSlidePerPosition
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

const filmDataReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_SLIDER_BACKWARD': {
      const slideWidth = getSlideWidth(state.tilesPerPosition);

      if (state.xPosition > -step) {
        // prevents slider from sliding off tracks; -step is the first set of clones
        return state;
      }
      if (state.xPosition > -step - 100 && state.xPosition % 100 !== 0) {
        // if prevState.xPosition % 100 isn't equal to zero, there is a remainder,
        // indicating oddly displaced slides; so put slider back on regular track
        // at the first position (-step);
        const updatedXPosition = -step;
        const updatedSlideIndexes = getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
          state.tilesPerPosition
        );
        return {
          ...state,
          isWrapping: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }

      if (state.xPosition === -step) {
        // if slider is at starting position, prepare for wrapAround
        const updatedXPosition = state.xPosition + step;
        return { ...state, isWrapping: true, xPosition: updatedXPosition };
      }

      // normal slider movement
      const updatedXPosition = state.xPosition + step;
      const updatedSlideIndexes = getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
        state.tilesPerPosition
      );
      return {
        ...state,
        isWrapping: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'MOVE_SLIDER_FORWARD': {
      const slideWidth = getSlideWidth(state.tilesPerPosition);

      if (state.xPosition === state.naturalEndPositionX - step) {
        // prevents slider from sliding off tracks; state.naturalEndPositionX - step is the clones at the end
        return state;
      }

      if (
        state.xPosition > state.naturalEndPositionX &&
        state.xPosition < state.naturalEndPositionX + step
      ) {
        // if xPosition has less than a full movement toward the end, do partial movement to end
        const updatedXPosition = state.naturalEndPositionX;
        const updatedSlideIndexes = getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
          state.tilesPerPosition
        );
        return {
          ...state,
          isWrapping: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }

      if (state.xPosition === state.naturalEndPositionX) {
        // if slider is at ending position, prepare for wrapAround
        const updatedXPosition = state.xPosition - step;
        return { ...state, isWrapping: true, xPosition: updatedXPosition };
      }

      // normal slider movement
      const updatedXPosition = state.xPosition - step;
      const updatedSlideIndexes = getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
        state.tilesPerPosition
      );
      return {
        ...state,
        isWrapping: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'WRAP_BACKWARD': {
      const slideWidth = getSlideWidth(state.tilesPerPosition);

      const updatedSlideIndexes = getActiveSlideIndexes(
        state.naturalEndPositionX,
        slideWidth,
        state.tilesPerPosition
      );
      return {
        ...state,
        isWrapping: false,
        xPosition: state.naturalEndPositionX,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'WRAP_FORWARD': {
      const slideWidth = getSlideWidth(state.tilesPerPosition);
      const updatedSlideIndexes = getActiveSlideIndexes(
        -step,
        slideWidth,
        state.tilesPerPosition
      );
      return {
        ...state,
        isWrapping: false,
        xPosition: -step,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    }

    case 'RECALIBRATE_SLIDER': {
      const resizedSlideWidth = getSlideWidth(action.id.updatedTilesPerPosition);
      const resizedNaturalEndPositionX =
        -resizedSlideWidth * action.id.genreLength;

      const leftMostSlideIndex = getLeftMostSlideIndex(
        state.tilesPerPosition,
        state.visibleSlideIndexes,
        action.id.updatedTilesPerPosition
      );

      // isOverflowed means that the slider would be partially showing the cloned set at
      // the end along with non-cloned slides; in that case, just show last natural position
      const isOverflowed = leftMostSlideIndex > action.id.genreLength;

      const resizedVisibleSlideIndexes = isOverflowed
        ? getNaturalEndingSlideIndexes(
            action.id.genreLength,
            action.id.updatedTilesPerPosition
          )
        : getLeftAlignedSlideIndexes(
            leftMostSlideIndex,
            action.id.updatedTilesPerPosition
          );

      const resizedXPosition = isOverflowed
        ? resizedNaturalEndPositionX
        : leftMostSlideIndex * -resizedSlideWidth;

      return {
        isWrapping: true,
        tilesPerPosition: action.id.updatedTilesPerPosition,
        visibleSlideIndexes: resizedVisibleSlideIndexes,
        xPosition: resizedXPosition,
        naturalEndPositionX: resizedNaturalEndPositionX,
      };
    }

    default:
      return state;
  }
};

export default filmDataReducer;
