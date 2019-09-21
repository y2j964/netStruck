import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

const getPlacementInViewport = (index, slidesPerPosition) => {
  if (index % slidesPerPosition === 0) {
    return 'leftEdge';
  }
  if (index % slidesPerPosition === slidesPerPosition - 1) {
    return 'rightEdge';
  }
  return 'middle';
};

export default function TileGroup({ filmGroupData, slidesPerPosition }) {
  const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
  const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
  const [middleHoveredIndex, setMiddleHoveredIndex] = useState();

  const tileFrags = filmGroupData.map((film, index) => (
    <Tile
      {...film}
      key={film.id}
      index={index}
      placementInViewport={getPlacementInViewport(index, slidesPerPosition)}
      leftEdgeIsHovered={leftEdgeIsHovered}
      handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      handleRightEdgeIsHovered={setRightEdgeIsHovered}
      middleHoveredIndex={middleHoveredIndex}
      handleMiddleHoveredIndex={setMiddleHoveredIndex}
    />
  ));

  return <ul className='tile-group mb-12'>{tileFrags}</ul>;
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  slidesPerPosition: PropTypes.number.isRequired,
};
