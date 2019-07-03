import React from 'react';
import PropTypes from 'prop-types';

export default function Tile(props) {
  return (
    <li className='w-1/5 flex-none mr-1 tile'>
      {/* <p>{props.filmData.title}</p> */}
      <div className='ratio-16-9'>
        <img src={props.filmData.img} alt='' />
        <div className='absolute left-0 bottom-0'>
          <div className='w-4/5 p-1'>
            {/* <span className='block text-xs'>{props.filmData.title}</span>
            <span className='block text-xs'>{props.filmData.duration}</span>
            <span className='block text-xs'>{props.filmData.year}</span>
            <span className='block text-xs'>{props.filmData.director}</span> */}
            {/* <span className="block">{props.filmData.year}</span> */}
          </div>
        </div>
      </div>
    </li>
  );
}

Tile.propTypes = {
  filmData: PropTypes.object.isRequired,
};
