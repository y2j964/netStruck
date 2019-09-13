import React, { useState } from 'react';
import { useFilmValues } from '../../context';
import debounce from '../../utilityFunctions/debounce';
import SearchResults from '../SearchResults';
import SearchFilterInput from '../SearchFilterInput';
import SearchIcon from '../../icons/SearchIcon';

// only filter input based on these properties
const relevantKeys = ['title', 'genres', 'actors', 'director', 'description'];

const getRelevantValues = (targetedObj, targetedKeys) => {
  const relevantValues = [];
  targetedKeys.forEach(prop => {
    relevantValues.push(targetedObj[prop]);
  });
  return relevantValues;
};

export default function SearchFilter() {
  const [inputValue, setInputValue] = useState();

  const { state } = useFilmValues();
  const { films } = state;

  const filteredFilms = films.filter(film => {
    const relevantValues = getRelevantValues(film, relevantKeys);
    return new RegExp(`\\b${inputValue}\\S*`, 'i').test(relevantValues);
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form role='search' className='search-filter' onSubmit={handleSubmit}>
        <span className='pr-4 pb-2 mr-5 border-r border-gray'>
          <SearchIcon
            searchIconWidth='35'
            searchIconHeight='35'
            fill='#bebebb'
          />
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
