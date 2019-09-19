import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Tile from './Tile';

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

const createFrontClones = (slidesPerPosition, filmGroupData) => {
  const frontClones = [];
  for (let i = 0; i < slidesPerPosition; i += 1) {
    const tile = filmGroupData[i];
    tile.id = uuid.v4();
    frontClones.push(tile);
  }
  return frontClones;
};

const createEndClones = (slidesPerPosition, filmGroupData) => {
  const endClones = [];
  for (
    let i = filmGroupData.length - slidesPerPosition;
    i < filmGroupData.length;
    i += 1
  ) {
    const tile = filmGroupData[i];
    tile.id = uuid.v4();
    endClones.push(tile);
  }
  return endClones;
};

function TileGroup({
  filmGroupData,
  xPosition,
  transition,
  wrapAround,
  slidesPerPosition,
  visibleSlideIndexes,
}) {
  const [endClones, setEndClones] = useState([]);
  const [frontClones, setFrontClones] = useState([]);
  const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
  const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);

  useEffect(() => {
    const endClonesFrags = createEndClones(slidesPerPosition, filmGroupData);

    const frontClonesFrags = createFrontClones(
      slidesPerPosition,
      filmGroupData,
    );

    setEndClones(endClonesFrags);
    setFrontClones(frontClonesFrags);
  }, [slidesPerPosition, filmGroupData, visibleSlideIndexes]);

  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };

  const clonedFrontTileFrags = frontClones.map((film, index) => (
    <Tile
      {...film}
      key={film.id}
      index={index + filmGroupData.length + slidesPerPosition}
      placementInViewport={getPlacementInViewPort(
        visibleSlideIndexes,
        index + filmGroupData.length + slidesPerPosition,
      )}
      leftEdgeIsHovered={leftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
    />
  ));
  const clonedEndTileFrags = endClones.map((film, index) => {
    return (
      <Tile
        {...film}
        key={film.id}
        index={index}
        placementInViewport={getPlacementInViewPort(visibleSlideIndexes, index)}
        leftEdgeIsHovered={leftEdgeIsHovered}
        rightEdgeIsHovered={rightEdgeIsHovered}
      />
    );
  });

  const naturalTileFrags = filmGroupData.map((entry, index) => (
    <Tile
      {...entry}
      key={entry.id}
      placementInViewport={getPlacementInViewPort(
        visibleSlideIndexes,
        index + slidesPerPosition,
      )}
      rowLength={filmGroupData.length}
      ariaLabel={`slide ${index + 1} of ${filmGroupData.length}`}
      index={index + slidesPerPosition}
      // index value is accumulated to account for slides
      leftEdgeIsHovered={leftEdgeIsHovered}
      handleLeftEdgeIsHovered={setLeftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
      handleRightEdgeIsHovered={setRightEdgeIsHovered}
    />
  ));

  console.log('tgroup rendered');
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

TileGroup.propTypes = {
  filmGroupData: PropTypes.array,
  wrapAround: PropTypes.func.isRequired,
  slidesPerPosition: PropTypes.number.isRequired,
  visibleSlideIndexes: PropTypes.array.isRequired,
  xPosition: PropTypes.number.isRequired,
  transition: PropTypes.bool.isRequired,
};

export default TileGroup;
