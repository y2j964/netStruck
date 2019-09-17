import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Tile from './Tile';

function TileGroup({
  filmGroupData,
  xPosition,
  transition,
  wrapAround,
  slidesPerPosition,
  visibleSlideIndexes,
}) {
  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };

  const tileFrags = filmGroupData.map((entry, index) => (
    <Tile
      {...entry}
      key={entry.id}
      index={index + slidesPerPosition}
      // true index indicates it's index accounting for the cloned slides
      // trueIndex={index}
      ariaLabel={`slide ${index + 1} of ${filmGroupData.length}`}
      visibleSlideIndexes={visibleSlideIndexes}
    />
  ));

  const frontClones = [];
  for (let i = 0; i < slidesPerPosition; i += 1) {
    const tile = (
      <Tile
        {...filmGroupData[i]}
        key={uuid.v4()}
        index={i + filmGroupData.length + slidesPerPosition}
        id={uuid.v4()}
        visibleSlideIndexes={visibleSlideIndexes}
      />
    );
    frontClones.push(tile);
  }

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
        index={i - filmGroupData.length + slidesPerPosition}
        id={uuid.v4()}
        visibleSlideIndexes={visibleSlideIndexes}
      />
    );
    endClones.push(tile);
  }

  tileFrags.unshift(endClones);
  tileFrags.push(frontClones);

  // console.log('tile group rendered');
  return (
    <ul
      className='tile-group'
      style={tileGroupStyle}
      onTransitionEnd={wrapAround}
    >
      {tileFrags}
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
