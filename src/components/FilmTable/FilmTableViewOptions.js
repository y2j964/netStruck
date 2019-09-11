/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';
import { useFilmGetSet } from '../../context';
import Plus from '../../icons/Plus';
import ChevronDown from '../../icons/ChevronDown';
import SortingDirectionArrows from '../../icons/SortingDirectionArrows';

export default function FilmTableViewOptions({
  filmDataLength,
  sortBy,
  sortIsAscending,
  setSortBy,
  toggleSortDirection,
}) {
  const { dispatch } = useFilmGetSet();

  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });
  // document.querySelector('html').classList.toggle('scroll-lock');

  return (
    <div className='all-films'>
      <div className='all-films__intro'>
        <h2 className='text-3xl text-white text-center md:text-left'>
          All Films
        </h2>
        <span className='hidden md:block text-white'>
          {filmDataLength} Results
        </span>
      </div>
      <div className='all-films__filter-options'>
        <button className='filter-btn' onClick={toggleSearchModal}>
          FILTER
          <Plus svgClassName='icon--positioned-right' width='20' height='20' />
        </button>
        <div className='l-sort-selector'>
          <label htmlFor='allFilmsSorter' className='sr-only'>
            Select Sort Criterion
          </label>
          <select
            name='allFilmsSorter'
            id='allFilmsSorter'
            aria-controls='filmTable'
            value={sortBy}
            className='sort-selector'
            onChange={e => setSortBy(e.target.value)}
          >
            <option
              value='sort'
              className='text-black'
              aria-selected={sortBy === 'sort' && 'true'}
            >
              SORT BY:
            </option>
            <option value='title' aria-selected={sortBy === 'title' && 'true'}>
              TITLE
            </option>
            <option
              value='director'
              className='text-black'
              aria-selected={sortBy === 'director' && 'true'}
            >
              DIRECTOR
            </option>
            <option
              value='duration'
              className='text-black'
              aria-selected={sortBy === 'duration' && 'true'}
            >
              DURATION
            </option>
            <option
              value='year'
              className='text-black'
              aria-selected={sortBy === 'year' && 'true'}
            >
              YEAR
            </option>
          </select>
          <ChevronDown svgClassName='icon--positioned-right z-10' />
        </div>
      </div>
      <div className='all-films__sorting-direction'>
        <span className='md:hidden text-white'>{filmDataLength} Results</span>
        <button
          className='sort-direction-toggle'
          aria-label='toggle sort direction'
          aria-describedby='sortDirDesc'
          aria-controls='filmTable'
          onClick={toggleSortDirection}
        >
          <span
            className='sr-only'
            id='sortDirDesc'
            aria-live='polite'
          >{`Sort direction is currently ${
            sortIsAscending ? 'ascending' : 'descending'
          }`}</span>
          <SortingDirectionArrows svgClassName='sort-direction-toggle__svg' />
        </button>
      </div>
    </div>
  );
}

FilmTableViewOptions.propTypes = {
  filmDataLength: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortIsAscending: PropTypes.bool.isRequired,
  toggleSortDirection: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
};
