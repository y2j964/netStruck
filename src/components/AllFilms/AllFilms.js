import React, { useState, useEffect } from 'react';
import { useFilmValues } from '../../context';
import FilmTable from './FilmTable/FilmTable';
import FilmRows from './FilmTable/FilmRows';
import TableViewOptions from './TableViewOptions';
import Spinner from '../../icons/Spinner';

// regex func from Thorsten Frommen
const stripLeadingArticle = string => string.replace(/^(an?|the)\s/i, '');

// eslint-disable-next-line consistent-return
const getSortCompareFunc = (sortCriterion, sortIsAscending) => {
  switch (true) {
    case sortCriterion === 'duration' && sortIsAscending:
      return (filmA, filmB) =>
        parseInt(filmA.duration, 10) - parseInt(filmB.duration, 10);

    case sortCriterion === 'duration' && !sortIsAscending:
      return (filmA, filmB) =>
        parseInt(filmB.duration, 10) - parseInt(filmA.duration, 10);

    case sortCriterion === 'year' && sortIsAscending:
      return (filmA, filmB) => filmA.year - filmB.year;

    case sortCriterion === 'year' && !sortIsAscending:
      return (filmA, filmB) => filmB.year - filmA.year;

    case sortCriterion === 'director' && sortIsAscending:
      return (filmA, filmB) =>
        filmA.director
          .split(' ')[1]
          .localeCompare(filmB.director.split(' ')[1]);

    case sortCriterion === 'director' && !sortIsAscending:
      return (filmA, filmB) =>
        filmB.director
          .split(' ')[1]
          .localeCompare(filmA.director.split(' ')[1]);

    case sortCriterion === 'title' && sortIsAscending:
      return (filmA, filmB) =>
        stripLeadingArticle(filmA.title).localeCompare(
          stripLeadingArticle(filmB.title),
        );

    case sortCriterion === 'title' && !sortIsAscending:
      return (filmA, filmB) =>
        stripLeadingArticle(filmB.title).localeCompare(
          stripLeadingArticle(filmA.title),
        );

    default:
      // will fire if changed to 'sort'
      break;
  }
};

const handleInputChange = (event, callback) => {
  const { target } = event;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  // eslint-disable-next-line no-unused-vars
  const { name } = target;
  console.log(name);
  console.log(value);
  callback(value);
};

export default function AllFilms() {
  const [sortBy, setSortBy] = useState('title');
  const [sortIsAscending, setSortIsAscending] = useState(true);

  useEffect(() => {
    document.title = 'All Films - NetStruck';
  }, []);

  const { state } = useFilmValues();
  const [...filmData] = state.films;
  const { isLoading } = state;

  const compareFunc = getSortCompareFunc(sortBy, sortIsAscending);
  filmData.sort(compareFunc);
  const filmDataLength = filmData.length;

  return (
    <div className='md:px-12 my-16'>
      <h1 className='sr-only'>NetStruck All Films</h1>
      <TableViewOptions
        sortBy={sortBy}
        sortIsAscending={sortIsAscending}
        handleInputChange={e => handleInputChange(e, setSortBy)}
        filmDataLength={filmDataLength}
        toggleSortDirection={() => setSortIsAscending(!sortIsAscending)}
      />
      {isLoading ? (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <FilmTable>
          <FilmRows filmData={filmData} />
        </FilmTable>
      )}
    </div>
  );
}
