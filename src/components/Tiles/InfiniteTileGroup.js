import React, { useState, useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import Tile from './Tile';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

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
  isWrapping,
  handleTransitionEnd,
  tilesPerPosition,
  visibleSlideIndexes,
}) {
  const [endClones, setEndClones] = useState([]);
  const [frontClones, setFrontClones] = useState([]);
  const [hoveredItem, setHoveredItem] = useState({ position: '', index: NaN });
  // relevant position values are 'rightEdge', 'leftEdge', 'middle'

  const handleMouseEnter = hoveredObj => setHoveredItem(hoveredObj);
  // needs useCallback b/c it is used as dep in Tile useEffect
  const handleMouseLeave = useCallback(
    hoveredObj => setHoveredItem(hoveredObj),
    []
  );

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
    transition: isWrapping ? 'transform 750ms ease' : 'none',
  };

  const clonedFrontTileFrags = frontClones.map((film, index) => (
    <Tile
      key={film.id}
      index={index + filmGroupData.length + tilesPerPosition}
      title={film.title}
      year={film.year}
      slug={film.slug}
      img={film.img}
      alt={film.alt}
      placementInViewport={index !== 0 ? 'offscreen' : 'rightPreview'}
      hoveredItem={hoveredItem}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  ));

  const clonedEndTileFrags = endClones.map((film, index) => (
    <Tile
      key={film.id}
      index={index}
      title={film.title}
      year={film.year}
      slug={film.slug}
      img={film.img}
      alt={film.alt}
      placementInViewport={
        index + 1 !== tilesPerPosition ? 'offscreen' : 'leftPreview'
      }
      hoveredItem={hoveredItem}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  ));

  const naturalTileFrags = filmGroupData.map((film, index) => (
    <Tile
      key={film.id}
      index={index + tilesPerPosition}
      title={film.title}
      year={film.year}
      slug={film.slug}
      img={film.img}
      alt={film.alt}
      placementInViewport={getPlacementInViewport(
        visibleSlideIndexes,
        index + tilesPerPosition
      )}
      ariaLabel={`slide ${index + 1} of ${filmGroupData.length}`}
      // index value is accumulated to account for slides
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

  return (
    <ul
      className="tile-group"
      style={tileGroupStyle}
      onTransitionEnd={handleTransitionEnd}
    >
      {clonedEndTileFrags}
      {naturalTileFrags}
      {clonedFrontTileFrags}
    </ul>
  );
}

InfiniteTileGroup.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
  handleTransitionEnd: PropTypes.func.isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
  visibleSlideIndexes: PropTypes.array.isRequired,
  xPosition: PropTypes.number.isRequired,
  isWrapping: PropTypes.bool.isRequired,
};

export default InfiniteTileGroup;
