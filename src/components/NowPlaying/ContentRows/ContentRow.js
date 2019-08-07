import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderRow from './SliderRow';
import filmData from '../../../filmData';

export default class ContentRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmGroupData: filmData[this.props.category],
    };
  }

  // activateRelevantSlides = activeSlides => {
  //   this.setState(prevState => {
  //     const updatedFilmGroups = prevState.filmGroupData.map(entry => {
  //       if (!activeSlides.includes(entry.id)) {
  //         entry.isActive = false;
  //         return entry;
  //       }
  //       entry.isActive = true;
  //       return entry;
  //     });
  //     return { filmGroups: updatedFilmGroups };
  //   });
  // };

  render() {
    const { category } = this.props;

    return (
      <div className='content-row'>
        <div className='content-row__header flex justify-between px-4-percent'>
          <h2 className='content-row__title text-white mb-2'>{category}</h2>
          <a href='' className='text-white'>
            See More
          </a>
        </div>
        <SliderRow
          filmGroupData={this.state.filmGroupData}
          category={category}
          activateRelevantSlides={this.activateRelevantSlides}
          // render={() => <TileGroup filmGroupData={props.filmGroupData} />}
        />
      </div>
    );
  }
}

ContentRow.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  activateRelevantSlides: PropTypes.func.isRequired,
};
