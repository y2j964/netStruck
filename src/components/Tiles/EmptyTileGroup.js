import React from 'react';
import PropTypes from 'prop-types';
import EmptyTile from './EmptyTile';
// import { Transition, TransitionGroup } from 'react-transition-group';

export default function EmptyTileGroup({ numOfTiles }) {
  const emptyTileFrags = [];
  for (let i = 0; i < numOfTiles; i += 1) {
    emptyTileFrags.push(<EmptyTile key={i} index={i} />);
  }

  return <ul className="flex">{emptyTileFrags}</ul>;
}

EmptyTileGroup.propTypes = {
  numOfTiles: PropTypes.number.isRequired,
};
