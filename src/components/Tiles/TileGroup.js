import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  const [hoveredItem, setHoveredItem] = useState({ position: '', index: null });
  // relevant position values are 'rightEdge', 'leftEdge', 'middle'

  const tileFrags = filmGroupData.map((film, index) => (
    <Tile
      {...film}
      key={film.id}
      index={index}
      placementInViewport={getPlacementInViewport(index, tilesPerPosition)}
      hoveredItem={hoveredItem}
      setHoveredItem={setHoveredItem}
    />
  ));

  return <ul className='tile-group'>{tileFrags}</ul>;
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
};
