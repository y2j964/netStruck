import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TileChunks from './Tiles/TileChunks';
import BtnPrimary from './BtnPrimary/BtnPrimary';
import Spinner from '../icons/Spinner';

export default function SearchResults({
  totalResults,
  filteredFilms,
  loadMore,
}) {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    // set isLoadingMore to false when you get more filteredFilms via pagination
    setIsLoadingMore(false);
  }, [filteredFilms]);

  const handleClick = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      loadMore();
    }, 500);
  };

  return (
    <div className='search-filter__results' aria-live='polite'>
      <h3 className='text-white text-center text-2xl uppercase font-bold light-gray mb-8'>
        {totalResults} Results
      </h3>
      <TileChunks filmGroupData={filteredFilms} />
      {isLoadingMore ? (
        <Spinner />
      ) : (
        <div className='text-center'>
          <BtnPrimary handleClick={handleClick} additionalClasses='mb-12'>
            Show More
          </BtnPrimary>
        </div>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  totalResults: PropTypes.number,
  filteredFilms: PropTypes.array,
  loadMore: PropTypes.func,
};
