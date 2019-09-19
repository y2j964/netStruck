import React from 'react';
import uuid from 'uuid';
import Tile from './Tile';

export default function BlankTiles() {
  return (
    <Tile
      key={uuid.v4()}
      // index value is accumulated to account for slides
    />
  );
}
