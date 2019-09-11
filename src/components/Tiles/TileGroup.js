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
  visibleSlideIds,
}) {
  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };

  const tileFrags = filmGroupData.map((entry, index) => (
    <Tile
      key={entry.id}
      {...entry}
      index={index}
      filmGroupLength={filmGroupData.length}
      visibleSlideIds={visibleSlideIds}
    />
  ));

  const frontClones = [];
  for (let i = 0; i < slidesPerPosition; i += 1) {
    const tile = (
      <Tile
        {...filmGroupData[i]}
        key={uuid.v4()}
        id={uuid.v4()}
        visibleSlideIds={visibleSlideIds}
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
        id={uuid.v4()}
        visibleSlideIds={visibleSlideIds}
      />
    );
    endClones.push(tile);
  }

  tileFrags.unshift(endClones);
  tileFrags.push(frontClones);

  console.log('tile group rendered');
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
  visibleSlideIds: PropTypes.array.isRequired,
  xPosition: PropTypes.number.isRequired,
  transition: PropTypes.bool.isRequired,
};

export default TileGroup;
