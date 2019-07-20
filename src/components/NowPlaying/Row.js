import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import tileData from './tileData';

export default function Row(props) {
  // const tiles = tileData.map((instance, index) => (
  //   <Tile key={index} tile={instance} />
  // ));
  const category = props.category || [];
  const categoryGroup = category.map((entry, index) => (
    <Tile key={index} filmData={entry} />
  ));

  return (
    <div className='tile-row'>
      <div className='flex justify-between'>
        <h2 className='tile-row__heading text-white mb-2'>{props.heading}</h2>
        <a href='' className='text-white'>
          See More
        </a>
      </div>
      <ul className='tile-row__list flex mb-3'>{categoryGroup}</ul>
    </div>
  );
}

Row.propTypes = {
  category: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
};
