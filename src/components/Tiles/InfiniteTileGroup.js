import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Tile from './Tile';

const getTilePlaceholders = tilesPerPosition => {
  const tileList = [];
  for (let i = 0; i < tilesPerPosition; i += 1) {
    tileList.push(<Tile key={i} />);
  }
  return tileList;
};

const getPlacementInViewPort = (visibleSlideIndexes, index) => {
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
  const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
  const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
  const [middleHoveredIndex, setMiddleHoveredIndex] = useState(null);

  useLayoutEffect(() => {
    const endClonesFrags = createEndClones(tilesPerPosition, filmGroupData);

    const frontClonesFrags = createFrontClones(
      tilesPerPosition,
      filmGroupData,
    );

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
      {...film}
      key={film.id}
      index={index + filmGroupData.length + tilesPerPosition}
      placementInViewport={index !== 0 ? 'offscreen' : 'rightPreview'}
      leftEdgeIsHovered={leftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      middleHoveredIndex={middleHoveredIndex}
    />
  ));

  const clonedEndTileFrags = endClones.map((film, index) => (
    <Tile
      {...film}
      key={film.id}
      index={index}
      placementInViewport={
        index + 1 !== tilesPerPosition ? 'offscreen' : 'leftPreview'
      }
      leftEdgeIsHovered={leftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      middleHoveredIndex={middleHoveredIndex}
    />
  ));

  const naturalTileFrags = filmGroupData.map((film, index) => (
    <Tile
      {...film}
      key={film.id}
      placementInViewport={getPlacementInViewPort(
        visibleSlideIndexes,
        index + tilesPerPosition,
      )}
      rowLength={filmGroupData.length}
      ariaLabel={`slide ${index + 1} of ${filmGroupData.length}`}
      index={index + tilesPerPosition}
      // index value is accumulated to account for slides
      leftEdgeIsHovered={leftEdgeIsHovered}
      handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      handleRightEdgeIsHovered={setRightEdgeIsHovered}
      middleHoveredIndex={middleHoveredIndex}
      handleMiddleHoveredIndex={setMiddleHoveredIndex}
    />
  ));

  return (
    <ul
      className='tile-group'
      style={tileGroupStyle}
      onTransitionEnd={wrapAround}
    >
      {clonedEndTileFrags.length === tilesPerPosition ? (
        clonedEndTileFrags
      ) : (
        <React.Fragment>
          {getTilePlaceholders(tilesPerPosition)}
        </React.Fragment>
      )}
      {naturalTileFrags}
      {clonedFrontTileFrags}
    </ul>
  );
}

InfiniteTileGroup.propTypes = {
  filmGroupData: PropTypes.array,
  wrapAround: PropTypes.func.isRequired,
  tilesPerPosition: PropTypes.number.isRequired,
  visibleSlideIndexes: PropTypes.array.isRequired,
  xPosition: PropTypes.number.isRequired,
  transition: PropTypes.bool.isRequired,
};

export default InfiniteTileGroup;

// const endCloneMountAnimation = {
//   animationDuration: '500ms',
//   animationName: 'slideInFromLeft',
// };
