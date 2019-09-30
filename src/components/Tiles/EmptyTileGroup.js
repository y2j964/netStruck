import React from 'react';
import PropTypes from 'prop-types';
import EmptyTile from './EmptyTile';

export default function EmptyTileGroup({ numOfTiles }) {
  const emptyTileFrags = [];
  for (let x = 0; x < numOfTiles; x += 1) {
    emptyTileFrags.push(<EmptyTile key={x} />);
  }

  return <ul className='flex'>{emptyTileFrags}</ul>;
}

EmptyTileGroup.propTypes = {
  numOfTiles: PropTypes.number.isRequired,
};
