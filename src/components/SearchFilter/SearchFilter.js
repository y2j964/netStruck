import React, { useState, useEffect } from 'react';
import { useNetStruckDataState } from '../../context';
import useDebounce from '../../utilityFunctions/useDebounce';
import SearchResults from '../SearchResults';
import SearchFilterInput from '../SearchFilterInput';
import SearchGlass from '../../icons/SearchGlass';

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

export default function SearchFilter() {
  const [inputValue, setInputValue] = useState();
  const [filteredFilms, setFilteredFilms] = useState([]);

  const { state } = useNetStruckDataState();
  const { films } = state;

  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedInputValue) {
      const updatedFilteredFilms = getFilteredFilms(films, debouncedInputValue);
      setFilteredFilms(updatedFilteredFilms);
    } else {
      setFilteredFilms([]);
    }
  }, [debouncedInputValue, films]);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedFilteredFilms = getFilteredFilms(films, inputValue);
    setFilteredFilms(updatedFilteredFilms);
  };

  return (
    <React.Fragment>
      <form role='search' className='search-filter' onSubmit={handleSubmit}>
        <span className='pr-4 pb-2 mr-5 border-r border-gray'>
          <SearchGlass width='35' height='35' fill='#bebebb' />
        </span>
        <label htmlFor='searchInput' className='sr-only'>
          Enter search terms
        </label>
        <SearchFilterInput handleChange={e => setInputValue(e.target.value)} />
      </form>
      <SearchResults filteredFilms={filteredFilms} inputValue={inputValue} />
    </React.Fragment>
  );
}
