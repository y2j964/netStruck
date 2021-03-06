import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import TileChunks from '../Tiles/TileChunks';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import ShowMoreButtonRenderer from '../ShowMoreButtonRenderer';

export default function SearchResults({
  totalResults,
  filteredFilms,
  loadMore,
  hasMore,
  tilesPerPosition,
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
    <div className="search-filter__results" aria-live="polite">
      <h3 className="text-white text-center text-2xl uppercase font-bold text-light-gray mb-8">
        {totalResults} Results
      </h3>
      <TileChunks
        filmGroupData={filteredFilms}
        tilesPerPosition={tilesPerPosition}
      />
      <ShowMoreButtonRenderer isLoadingMore={isLoadingMore} hasMore={hasMore}>
        <div className="text-center">
          <BtnPrimary handleClick={handleClick}>Show More</BtnPrimary>
        </div>
      </ShowMoreButtonRenderer>
    </div>
  );
}

SearchResults.propTypes = {
  totalResults: PropTypes.number,
  filteredFilms: PropTypes.arrayOf(netStruckDataTypes),
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  tilesPerPosition: PropTypes.number,
};
