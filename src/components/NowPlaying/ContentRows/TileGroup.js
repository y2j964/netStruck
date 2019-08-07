import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import Tile from './Tile';

function TileGroup({
  xPosition,
  transition,
  slidesPerPosition,
  wrapAround,
  filmGroupData,
  visibleSlideIndexes,
}) {
  const tileFrags = filmGroupData.map((entry, index) => (
    <Tile
      key={uuid.v4()}
      {...entry}
      visibleSlideIndexes={visibleSlideIndexes}
      index={index}
    />
  ));

  const frontClones = tileFrags.filter(
    (entry, index) => index < slidesPerPosition,
  );
  const endClones = tileFrags.filter(
    (entry, index) => index > tileFrags.length - slidesPerPosition - 1,
  );

  tileFrags.unshift(endClones);
  tileFrags.push(frontClones);

  const tileGroupStyle = {
    transform: `translateX(${xPosition}%)`,
    transition: transition ? 'transform 400ms ease-in-out' : 'none',
  };
  console.log('tilegroup rendered');
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
  visibleSlideIndexes: PropTypes.array,
  wrapAround: PropTypes.func.isRequired,
  slidesPerPosition: PropTypes.number.isRequired,
  xPosition: PropTypes.number.isRequired,
  transition: PropTypes.bool.isRequired,
};

export default TileGroup;
