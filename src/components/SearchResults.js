import React from 'react';
import PropTypes from 'prop-types';
import TileGroups from './Tiles/TileGroups';

export default function SearchResults({ filteredFilms, inputValue }) {
  if (!inputValue || filteredFilms.length === 0) {
    return (
      <div className='search-filter__results'>
        <p className='light-gray text-center font-bold'>
          Start typing to see results
        </p>
      </div>
    );
  }
  return (
    <div className='search-filter__results' aria-live='polite'>
      <h3 className='text-white text-center text-2xl uppercase font-bold light-gray mb-8'>
        {filteredFilms.length} Results
      </h3>
      <TileGroups filmGroupData={filteredFilms} />
    </div>
  );
}

SearchResults.propTypes = {
  filteredFilms: PropTypes.array,
  inputValue: PropTypes.string,
};
