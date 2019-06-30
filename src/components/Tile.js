import React from 'react';

export default function Tile(props) {
  return (
    <div className='w-1/5 flex-none mr-1 tile'>
      {/* <p>{props.tile.title}</p> */}
      <div className='ratio-16-9'>
        <img src={props.tile.img} alt='' />
        <div className='absolute left-0 bottom-0'>
          <div className='w-4/5 p-1'>
            {/* <span className='block text-xs'>{props.tile.title}</span>
            <span className='block text-xs'>{props.tile.duration}</span>
            <span className='block text-xs'>{props.tile.year}</span>
            <span className='block text-xs'>{props.tile.director}</span> */}
            {/* <span className="block">{props.tile.year}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
