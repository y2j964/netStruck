import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../icons/Plus';
import ChevronDown from '../../icons/ChevronDown';
import SortingDirectionArrows from '../../icons/SortingDirectionArrows';

export default function TableViewOptions({ filmDataLength, sortBy, handleInputChange, toggleSortDirection }) {
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
        <button className='filter-btn'>
          FILTER
          <Plus svgClassName='icon--positioned-right' />
        </button>
        <div className='l-sort-selector'>
          <label htmlFor='allFilmsSorter' className='sr-only'>
            Select Sort Criterion
          </label>
          <select
            name='allFilmsSorter'
            id='allFilmsSorter'
            value={sortBy}
            className='sort-selector'
            onChange={e => handleInputChange(e)}
          >
            <option value='sort' className='text-black'>
              SORT
            </option>
            <option value='title' className='text-black'>
              TITLE
            </option>
            <option value='director' className='text-black'>
              DIRECTOR
            </option>
            <option value='duration' className='text-black'>
              DURATION
            </option>
            <option value='year' className='text-black'>
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
          onClick={toggleSortDirection}
        >
          <SortingDirectionArrows svgClassName='sort-direction-toggle__svg' />
        </button>
      </div>
    </div>
  );
}

TableViewOptions.propTypes = {
  filmDataLength: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  toggleSortDirection: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}