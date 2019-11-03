import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import Tile from './Tile';

const getPlacementInViewport = (visibleSlideIndexes, index) => {
  if (index === visibleSlideIndexes[0] - 1) {
    return 'leftPreview';
  }
  if (index === visibleSlideIndexes[visibleSlideIndexes.length - 1] + 1) {
    return 'rightPreview';
  }
  if (!visibleSlideIndexes.includes(index)) {
    return 'offscreen';
  }
  if (index === visibleSlideIndexes[0]) {
    return 'leftEdge';
  }
  if (index === visibleSlideIndexes[visibleSlideIndexes.length - 1]) {
    return 'rightEdge';
  }
  return 'middle';
};

const createFrontClones = (tilesPerPosition, filmGroupData) => {
  const frontClones = [];
  for (let i = 0; i < tilesPerPosition; i += 1) {
    const tile = filmGroupData[i];
    tile.id = uuid.v4();
    frontClones.push(tile);
  }
  return frontClones;
};

const createEndClones = (tilesPerPosition, filmGroupData) => {
  const endClones = [];
  for (
    let i = filmGroupData.length - tilesPerPosition;
    i < filmGroupData.length;
    i += 1
  ) {
    const tile = filmGroupData[i];
    tile.id = uuid.v4();
    endClones.push(tile);
  }
  return endClones;
};

function InfiniteTileGroup({
  filmGroupData,
  xPosition,
  transition,
  wrapAround,
  tilesPerPosition,
  visibleSlideIndexes,
}) {
  const [endClones, setEndClones] = useState([]);
  const [frontClones, setFrontClones] = useState([]);
  const [hoveredItem, setHoveredItem] = useState({ position: '', index: NaN });
  // relevant position values are 'rightEdge', 'leftEdge', 'middle'

  useLayoutEffect(() => {
    const endClonesFrags = createEndClones(tilesPerPosition, filmGroupData);
    const frontClonesFrags = createFrontClones(tilesPerPosition, filmGroupData);

    setEndClones(endClonesFrags);
    setFrontClones(frontClonesFrags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tilesPerPosition]);
  // omitting filmGroupData b/c I don't care if clones have updated info;
  // they are window dressing that the user never interacts with

  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };

  const clonedFrontTileFrags = frontClones.map((film, index) => (
    <Tile
      key={film.id}
      {...film}
      index={index + filmGroupData.length + tilesPerPosition}
      placementInViewport={index !== 0 ? 'offscreen' : 'rightPreview'}
      hoveredItem={hoveredItem}
    />
  ));

  const clonedEndTileFrags = endClones.map((film, index) => (
    <Tile
      key={film.id}
      {...film}
      index={index}
      placementInViewport={
        index + 1 !== tilesPerPosition ? 'offscreen' : 'leftPreview'
      }
      hoveredItem={hoveredItem}
    />
  ));

  const naturalTileFrags = filmGroupData.map((film, index) => (
    <Tile
      key={film.id}
      {...film}
      placementInViewport={getPlacementInViewport(
        visibleSlideIndexes,
        index + tilesPerPosition,
      )}
      ariaLabel={`slide ${index + 1} of ${filmGroupData.length}`}
      index={index + tilesPerPosition}
      // index value is accumulated to account for slides
      hoveredItem={hoveredItem}
      setHoveredItem={setHoveredItem}
    />
  ));

  return (
    <ul
      className='tile-group'
      style={tileGroupStyle}
      onTransitionEnd={wrapAround}
    >
      {clonedEndTileFrags}
      {naturalTileFrags}
      {clonedFrontTileFrags}
    </ul>
  );
}

InfiniteTileGroup.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
  wrapAround: PropTypes.func.isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
  visibleSlideIndexes: PropTypes.array.isRequired,
  xPosition: PropTypes.number.isRequired,
  transition: PropTypes.bool.isRequired,
};

export default InfiniteTileGroup;
