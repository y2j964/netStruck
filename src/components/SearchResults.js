import React from 'react';
import StaticTileGroup from './NowPlaying/ContentRows/StaticTileGroup';
import PropTypes from 'prop-types';

export default function SearchResults({ filteredFilms, inputValue }) {
  if (!inputValue || filteredFilms.length === 0) {
    return (
      <div className='modal__results mt-16 w-85 m-auto'>
        <p className='modal-grey text-center font-bold'>
          Start typing to see results
        </p>
      </div>
    );
  }
  return (
    <div className='mt-16 width-85 mx-auto'>
      <h3 className='text-white text-right uppercase font-bold modal-grey'>
        {filteredFilms.length} Results
      </h3>
      <StaticTileGroup filmList={filteredFilms} />
    </div>
  );
}

SearchResults.propTypes = {
  filteredFilms: PropTypes.array,
  inputValue: PropTypes.string,
};
