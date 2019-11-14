import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { netStruckDataTypes } from '../../netStruckDataTypes';
import Tile from './Tile';

const getPlacementInViewport = (index, tilesPerPosition) => {
  if (index % tilesPerPosition === 0) {
    return 'leftEdge';
  }
  if (index % tilesPerPosition === tilesPerPosition - 1) {
    return 'rightEdge';
  }
  return 'middle';
};

export default function TileGroup({ filmGroupData, tilesPerPosition }) {
  const [hoveredItem, setHoveredItem] = useState({ position: '', index: NaN });
  // // relevant position values are 'leftEdge', 'middle', 'rightEdge'

  const tileFrags = filmGroupData.map((film, index) => (
    <Tile
      key={film.id}
      {...film}
      index={index}
      groupLength={filmGroupData.length}
      placementInViewport={getPlacementInViewport(index, tilesPerPosition)}
      hoveredItem={hoveredItem}
      setHoveredItem={setHoveredItem}
      isMyList
    />
  ));

  return <ul className='tile-group'>{tileFrags}</ul>;
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
};
