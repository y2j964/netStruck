import React, { useContext } from 'react';
import FilmTable from './FilmTable';
import Plus from '../../icons/Plus';
import ChevronDown from '../../icons/ChevronDown';
import SortingDirectionArrows from '../../icons/SortingDirectionArrows';
import { FilmDataContext } from '../../context';

const handleInputChange = event => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  console.log(name + ': ' + value);
};

export default function AllFilms() {
  const context = useContext(FilmDataContext);
  const totalNumberOfFilms = context.state.films.length;
  return (
    <div className='md:px-12 mt-16'>
      <div className='all-films'>
        <div className='all-films__intro'>
          <h2 className='text-3xl text-white text-center md:text-left'>
            All Films
          </h2>
          <span className='hidden md:block text-white'>
            {totalNumberOfFilms} Results
          </span>
        </div>
        <div className='all-films__filter-options'>
          <button className='filter-btn'>
            FILTER
            <Plus svgClassName='icon--positioned-right' />
          </button>
          <div className='l-sort-selector'>
            <select
              name='allFilmsSorter'
              id='allFilmsSorter'
              className='sort-selector'
              onChange={handleInputChange}
            >
              <option value='title' className='text-black'>
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
          <span className='md:hidden text-white'>
            {totalNumberOfFilms} Results
          </span>
          <button
            className='sort-direction-toggle'
            aria-label='toggle sort direction'
          >
            <SortingDirectionArrows />
          </button>
        </div>
      </div>
      <FilmTable />
    </div>
  );
}
