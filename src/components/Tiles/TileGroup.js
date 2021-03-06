import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import Tile from './Tile';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

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

  const handleMouseEnter = hoveredObj => setHoveredItem(hoveredObj);

  // needs useCallback b/c it is used as dep in Tile useEffect
  const handleMouseLeave = useCallback(
    hoveredObj => setHoveredItem(hoveredObj),
    []
  );

  const tileFrags = filmGroupData.map((film, index) => (
    <Tile
      key={film.id}
      index={index}
      title={film.title}
      year={film.year}
      slug={film.slug}
      img={film.img}
      alt={film.alt}
      groupLength={filmGroupData.length}
      placementInViewport={getPlacementInViewport(index, tilesPerPosition)}
      hoveredItem={hoveredItem}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    >
      <ToggleToMyListBtn
        slug={film.slug}
        isAddedToMyList={film.isAddedToMyList}
      />
    </Tile>
  ));

  return <ul className="tile-group">{tileFrags}</ul>;
}

TileGroup.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
};
