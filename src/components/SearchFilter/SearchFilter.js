import React, { useState, useEffect } from 'react';
import { useNetStruckDataState } from '../../NetStruckDataContext';
import useDebounce from '../../utilityFunctions/useDebounce';
import SearchResultsRenderer from './SearchResultsRenderer';
import SearchFilterInput from './SearchFilterInput';
import SearchGlass from '../../icons/SearchGlass';
import useResponsivePagination from '../../utilityFunctions/useResponsivePagination';
import SearchResults from './SearchResults';

// only filter input based on these properties
const relevantKeys = ['title', 'genres', 'actors', 'director', 'description'];

// return only the values of the relevant filmObj keys, so that we can check those values against our RegExp
const getRelevantValues = (targetedObj, targetedKeys) => {
  const relevantValues = [];
  targetedKeys.forEach(property => {
    relevantValues.push(targetedObj[property]);
  });
  return relevantValues;
};

const getFilteredFilms = (dataSource, searchQuery) => {
  const updatedFilteredFilms = dataSource.filter(film => {
    const relevantValues = getRelevantValues(film, relevantKeys);
    // return films that have words that start with the input value and are followed by zero or more non-whitespace characters
    return new RegExp(`\\b${searchQuery}\\S*`, 'i').test(relevantValues);
  });
  return updatedFilteredFilms;
};

const postsPerPageMinimum = 6;

export default function SearchFilter() {
  const { state } = useNetStruckDataState();
  const { films } = state;

  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    // reset value onMount so previous values don't persist
    setInputValue('');
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const {
    currentPosts,
    loadMore,
    setCurrentPage,
    itemsPerPosition,
  } = useResponsivePagination(postsPerPageMinimum, filteredFilms);

  const debouncedInputValue = useDebounce(inputValue, 500, setIsLoading);

  // when user stops typing for debounced timeout
  useEffect(() => {
    if (debouncedInputValue) {
      // mimic loading
      setTimeout(() => {
        const updatedFilteredFilms = getFilteredFilms(
          films,
          debouncedInputValue
        );
        setFilteredFilms(updatedFilteredFilms);
        setIsLoading(false);
      }, 500);
    } else {
      setFilteredFilms([]);
    }
    // if input changes, reset CurrentPage from pagination hook; if you don't do this,
    // you could incrementally load up to 30 posts, and when you change the input,
    // SearchResults will spit out 30 posts for the new query.
    setCurrentPage(1);
  }, [debouncedInputValue, films, setCurrentPage]);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedFilteredFilms = getFilteredFilms(films, inputValue);
    setFilteredFilms(updatedFilteredFilms);
  };

  return (
    <React.Fragment>
      <form role="search" className="search-filter" onSubmit={handleSubmit}>
        <span className="pr-4 pb-2 mr-5 border-r border-gray">
          <SearchGlass width="35" height="35" fill="#bebebb" />
        </span>
        <label htmlFor="searchInput" className="sr-only">
          Enter search terms
        </label>
        <SearchFilterInput
          handleChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
      <SearchResultsRenderer
        totalResults={filteredFilms.length}
        debouncedInputValue={debouncedInputValue}
        isLoading={isLoading}
      >
        <SearchResults
          totalResults={filteredFilms.length}
          filteredFilms={currentPosts}
          loadMore={loadMore}
          hasMore={currentPosts.length !== filteredFilms.length}
          tilesPerPosition={itemsPerPosition}
        />
      </SearchResultsRenderer>
    </React.Fragment>
  );
}
