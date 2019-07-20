import React from 'react';
import PropTypes from 'prop-types';

export default function Tile({ filmData }) {
  return (
    <li className='tile'>
      {/* <p>{filmData.title}</p> */}
      <div className='ratio-16-9'>
        <img src={filmData.img} alt='' />
        <div className='absolute left-0 bottom-0'>
          <div className='w-4/5 p-1'>
            {/* <span className='block text-xs'>{filmData.title}</span>
            <span className='block text-xs'>{filmData.duration}</span>
            <span className='block text-xs'>{filmData.year}</span>
            <span className='block text-xs'>{filmData.director}</span> */}
            {/* <span className="block">{filmData.year}</span> */}
          </div>
        </div>
      </div>
      <h3 className='tile__title'>{filmData.title}</h3>
    </li>
  );
}

Tile.propTypes = {
  filmData: PropTypes.object.isRequired,
};
