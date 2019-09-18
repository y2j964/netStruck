import React, { useState } from 'react';
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

const createFrontClones = (
  slidesPerPosition,
  filmGroupData,
  visibleSlideIndexes,
  leftEdgeIsHovered,
  rightEdgeIsHovered,
) => {
  const frontClones = [];
  for (let i = 0; i < slidesPerPosition; i += 1) {
    const tile = (
      <Tile
        {...filmGroupData[i]}
        key={uuid.v4()}
        id={uuid.v4()}
        index={i + filmGroupData.length + slidesPerPosition}
        placementInViewport={getPlacementInViewPort(
          visibleSlideIndexes,
          i + filmGroupData.length + slidesPerPosition,
        )}
        leftEdgeIsHovered={leftEdgeIsHovered}
        rightEdgeIsHovered={rightEdgeIsHovered}
      />
    );
    frontClones.push(tile);
  }
  return frontClones;
};

const createEndClones = (
  slidesPerPosition,
  filmGroupData,
  visibleSlideIndexes,
  leftEdgeIsHovered,
  rightEdgeIsHovered,
) => {
  const endClones = [];
  for (
    let i = filmGroupData.length - slidesPerPosition;
    i < filmGroupData.length;
    i += 1
  ) {
    const tile = (
      <Tile
        {...filmGroupData[i]}
        key={uuid.v4()}
        id={uuid.v4()}
        index={i - filmGroupData.length + slidesPerPosition}
        placementInViewport={getPlacementInViewPort(
          visibleSlideIndexes,
          i - filmGroupData.length + slidesPerPosition,
        )}
        leftEdgeIsHovered={leftEdgeIsHovered}
        rightEdgeIsHovered={rightEdgeIsHovered}
      />
    );
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
  const [leftEdgeIsHovered, setLeftEdgeIsHovered] = useState(false);
  const [rightEdgeIsHovered, setRightEdgeIsHovered] = useState(false);
  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };

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

  const endClones = createEndClones(
    slidesPerPosition,
    filmGroupData,
    visibleSlideIndexes,
  );
  const frontClones = createFrontClones(
    slidesPerPosition,
    filmGroupData,
    visibleSlideIndexes,
  );

  return (
    <ul
      className='tile-group'
      style={tileGroupStyle}
      onTransitionEnd={wrapAround}
      leftEdgeIsHovered={leftEdgeIsHovered}
      rightEdgeIsHovered={rightEdgeIsHovered}
    >
      {endClones}
      {naturalTileFrags}
      {frontClones}
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
