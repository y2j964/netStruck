import React from 'react';
import tileData from './tileData';
import Tile from './Tile';

export default function Row(props) {
  const tiles = tileData.map((instance, index) => (
    <Tile key={index} tile={instance} />
  ));
  return (
    <div className='row'>
      <h2 className=' text-white mb-2'>{props.heading}</h2>
      <ul className='flex mb-3'>{tiles}</ul>
    </div>
  );
}
