import React from 'react';
import PropTypes from 'prop-types';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import TileGroup from './TileGroup';
import chunk from '../../utilityFunctions/chunk';

export default function TileChunks({ filmGroupData, tilesPerPosition }) {
  const tileRows = tilesPerPosition
    ? chunk(filmGroupData, tilesPerPosition)
    : [];

  const tileRowFrags = tileRows.map((row, i) => (
    <TileGroup
      key={i}
      filmGroupData={row}
      tilesPerPosition={tilesPerPosition}
    />
  ));
  return tileRowFrags;
}

TileChunks.propTypes = {
  filmGroupData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
  tilesPerPosition: PropTypes.number,
};
