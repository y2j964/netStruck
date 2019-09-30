import React from 'react';
import PropTypes from 'prop-types';
import TileChunks from './Tiles/TileChunks';
import BtnPrimary from './BtnPrimary/BtnPrimary';

export default function SearchResults({
  filteredFilms,
  inputValue,
  showMore,
  totalResults,
}) {
  if (!inputValue || totalResults === 0) {
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
        {totalResults} Results
      </h3>
      <TileChunks filmGroupData={filteredFilms} />
      <div className='text-center'>
        <BtnPrimary handleClick={showMore} additionalClasses='mb-12'>
          Show More
        </BtnPrimary>
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  filteredFilms: PropTypes.array,
  inputValue: PropTypes.string,
  showMore: PropTypes.func,
  totalResults: PropTypes.number,
};
