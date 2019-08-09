import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileGroup from './TileGroup';
import ChevronLeft from '../../../icons/ChevronLeft';
import ChevronRight from '../../../icons/ChevronRight';
import debounce from '../../../utilityFunctions/debounce';

const step = 100;
const mediaBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default class SliderRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: true,
      xPosition: -step,
      slidesPerPosition: null,
      visibleSlideIndexes: [0],
    };
  }

  // movement

  getActiveSlideIndexes = (updatedXPosition, slideWidth) => {
    const activeSlides = [];
    for (let i = 0; i < this.state.slidesPerPosition; i += 1) {
      const slideIndex =
        Math.floor(-updatedXPosition / slideWidth) -
        this.state.slidesPerPosition +
        i;
      activeSlides.push(slideIndex);
    }
    return activeSlides;
  };

  moveSliderBackward = () => {
    const slideWidth = step / this.state.slidesPerPosition;
    if (this.state.xPosition > step) {
      return;
    }
    this.setState(prevState => {
      // if prevState.xPosition % 100 isn't equal to zero, there is a remainder,
      // indicating oddly displaced slides (remaining slides)
      if (prevState.xPosition % 100 !== 0 && prevState.xPosition > -200) {
        // put slider back on regular track at the first position;
        const updatedXPosition = -step;
        const updatedSlideIndexes = this.getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
        );
        return {
          transition: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      }
      if (prevState.xPosition === -step) {
        const updatedXPosition = prevState.xPosition + step;
        return {
          transition: true,
          xPosition: updatedXPosition,
        };
      }
      const updatedXPosition = prevState.xPosition + step;
      const updatedSlideIndexes = this.getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
      );
      return {
        transition: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      };
    });
  };

  moveSliderForward = () => {
    const slideWidth = step / this.state.slidesPerPosition;
    const endPositionX = -slideWidth * this.props.filmGroupData.length;

    if (this.state.xPosition === endPositionX - step) {
      // prevents slider from sliding off tracks; endPositionX - step is the clones at the end
      return;
    }
    if (
      this.state.xPosition < endPositionX + step &&
      this.state.xPosition > endPositionX
    ) {
      // if there are displaced slides, do a partial position shift at the end
      const updatedXPosition = endPositionX;
      const updatedSlideIndexes = this.getActiveSlideIndexes(
        updatedXPosition,
        slideWidth,
      );
      this.setState({
        transition: true,
        xPosition: updatedXPosition,
        visibleSlideIndexes: updatedSlideIndexes,
      });
    } else if (this.state.xPosition === endPositionX) {
      this.setState(prevState => {
        const updatedXPosition = prevState.xPosition - step;
        return {
          transition: true,
          xPosition: updatedXPosition,
        };
      });
    } else {
      this.setState(prevState => {
        const updatedXPosition = prevState.xPosition - step;
        const updatedSlideIndexes = this.getActiveSlideIndexes(
          updatedXPosition,
          slideWidth,
        );
        return {
          transition: true,
          xPosition: updatedXPosition,
          visibleSlideIndexes: updatedSlideIndexes,
        };
      });
    }
  };

  wrapAround = () => {
    console.log('wrapped');
    const slideWidth = step / this.state.slidesPerPosition;
    const endPositionX = -slideWidth * this.props.filmGroupData.length;

    if (this.state.xPosition === 0) {
      const updatedSlideIndexes = this.getActiveSlideIndexes(
        endPositionX,
        slideWidth,
      );
      this.setState({
        transition: false,
        xPosition: endPositionX,
        visibleSlideIndexes: updatedSlideIndexes,
      });
      return;
    }

    if (this.state.xPosition === endPositionX - step) {
      const updatedSlideIndexes = this.getActiveSlideIndexes(-step, slideWidth);
      this.setState({
        transition: false,
        xPosition: -step,
        visibleSlideIndexes: updatedSlideIndexes,
      });
    }
  };

  // resize calibration

  getEndingSlideIndexes = () => {
    const endingSlideIndexes = [];
    for (
      let i = this.props.filmGroupData.length - this.state.slidesPerPosition;
      i < this.props.filmGroupData.length;
      i += 1
    ) {
      const slideIndex = i;
      endingSlideIndexes.push(slideIndex);
    }
    return endingSlideIndexes;
  };

  getLeftAlignedSlideIndexes = (
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

  getResizedXPosition = updatedSlidesPerPosition => {
    const slideWidth = step / updatedSlidesPerPosition;
    const leftMostSlideIndex = this.state.visibleSlideIndexes[0];
    if (
      leftMostSlideIndex >
      this.props.filmGroupData.length - updatedSlidesPerPosition
    ) {
      const endPositionX = -slideWidth * this.props.filmGroupData.length;
      return endPositionX;
    }
    const updatedXPosition = leftMostSlideIndex * -slideWidth - step;
    return updatedXPosition;
  };

  getResizedSlideIndexes = updatedSlidesPerPosition => {
    const leftMostSlideIndex = this.state.visibleSlideIndexes[0];
    // on resize, we want to maintain the left-most slide
    // if the left-most slide doesn't support a wider viewport (i.e. you end up wrapping
    // the ending and beginning slides), just use last position
    if (
      leftMostSlideIndex >
      this.props.filmGroupData.length - updatedSlidesPerPosition
    ) {
      const endingSlideIndexes = this.getEndingSlideIndexes(leftMostSlideIndex);
      return endingSlideIndexes;
    }
    const resizedSlideIndexes = this.getLeftAlignedSlideIndexes(
      leftMostSlideIndex,
      updatedSlidesPerPosition,
    );
    return resizedSlideIndexes;
  };

  recalibrateSlider = updatedSlidesPerPosition => {
    const updatedVisibleSlideIndexes = this.getResizedSlideIndexes(
      updatedSlidesPerPosition,
    );
    const updatedXPosition = this.getResizedXPosition(updatedSlidesPerPosition);

    this.setState({
      slidesPerPosition: updatedSlidesPerPosition,
      visibleSlideIndexes: updatedVisibleSlideIndexes,
      xPosition: updatedXPosition,
    });
  };

  resizeSlider = () => {
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    switch (true) {
      case viewportWidth < mediaBreakpoints.sm &&
        this.state.slidesPerPosition !== 2: {
        const updatedSlidesPerPosition = 2;
        this.recalibrateSlider(updatedSlidesPerPosition);
        break;
      }
      case viewportWidth > mediaBreakpoints.sm &&
        viewportWidth < mediaBreakpoints.md &&
        this.state.slidesPerPosition !== 3: {
        const updatedSlidesPerPosition = 3;
        this.recalibrateSlider(updatedSlidesPerPosition);
        break;
      }
      case viewportWidth > mediaBreakpoints.md &&
        viewportWidth < mediaBreakpoints.lg &&
        this.state.slidesPerPosition !== 4: {
        const updatedSlidesPerPosition = 4;
        this.recalibrateSlider(updatedSlidesPerPosition);
        break;
      }
      case viewportWidth > mediaBreakpoints.lg &&
        viewportWidth < mediaBreakpoints.xl &&
        this.state.slidesPerPosition !== 4: {
        const updatedSlidesPerPosition = 4;
        this.recalibrateSlider(updatedSlidesPerPosition);
        break;
      }
      case viewportWidth > mediaBreakpoints.xl &&
        this.state.slidesPerPosition !== 5: {
        const updatedSlidesPerPosition = 5;
        this.recalibrateSlider(updatedSlidesPerPosition);
        break;
      }
      default:
    }
  };

  componentDidMount() {
    this.resizeSlider();
    window.addEventListener('resize', debounce(this.resizeSlider));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeSlider);
  }

  render() {
    const { category, filmGroupData } = this.props;
    console.log('render');
    return (
      <div className='slider-row relative w-full h-full'>
        <TileGroup
          filmGroupData={filmGroupData}
          {...this.state}
          category={category}
          wrapAround={this.wrapAround}
        />
        <div className='slider-row__content-preview slider-row__content-preview--left'>
          <button
            onClick={this.moveSliderBackward}
            className='slider-row__btn'
            aria-label='display previous films'
          >
            <ChevronLeft />
          </button>
        </div>
        <div className='slider-row__content-preview slider-row__content-preview--right'>
          <button
            onClick={this.moveSliderForward}
            className='slider-row__btn'
            aria-label='display more films'
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  }
}

SliderRow.propTypes = {
  // render: PropTypes.func.isRequired,
  filmGroupData: PropTypes.array.isRequired,
  activateRelevantSlides: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
