import React, { useState, useEffect, useRef } from 'react';
import { useNetStruckDataState } from '../../NetStruckDataContext';
import usePagination from '../../utilityFunctions/usePagination';
import FilmTable from '../../components/FilmTable/FilmTable';
import FilmRows from '../../components/FilmTable/FilmRows';
import FilmTableViewOptions from '../../components/FilmTable/FilmTableViewOptions';
import SelectCustom from '../../components/SelectCustom/SelectCustom';
import options from './options';
import WithLoadingIndicator from '../../components/WithLoadingIndicator';
import InfiniteScroller from '../../components/InfiniteScroller';

// regex func from Thorsten Frommen
// https://tfrommen.de/javascript-30-day-17-sorting-without-leading-articles/
const stripLeadingArticle = string => string.replace(/^(an?|the)\s/i, '');
const compareStrings = (a, b) => (a > b) - (a < b);

const sortByTitleAscending = (filmA, filmB) =>
  compareStrings(
    stripLeadingArticle(filmA.title),
    stripLeadingArticle(filmB.title)
  );

const sortByTitleDescending = (filmA, filmB) =>
  compareStrings(
    stripLeadingArticle(filmB.title),
    stripLeadingArticle(filmA.title)
  );

// accepts a name, and returns it with the last name in front
// if I input Justin Carmen Mooney as an arg, it will return Mooney Justin Carmen
const getNameFlipped = fullName => {
  const nameArray = fullName.split(' ');
  const lastName = nameArray.pop();
  // put the last name in front
  nameArray.unshift(lastName);
  const nameFlipped = nameArray.join(' ');
  return nameFlipped;
};

const sortByDirectorAscending = (filmA, filmB) => {
  const directorAFlipped = getNameFlipped(filmA.director);
  const directorBFlipped = getNameFlipped(filmB.director);
  return (
    compareStrings(directorAFlipped, directorBFlipped) ||
    sortByTitleAscending(filmA, filmB)
  );
};

const sortByDirectorDescending = (filmA, filmB) => {
  const directorAFlipped = getNameFlipped(filmA.director);
  const directorBFlipped = getNameFlipped(filmB.director);
  return (
    compareStrings(directorBFlipped, directorAFlipped) ||
    sortByTitleAscending(filmA, filmB)
  );
};

const sortByReleaseDateAscending = (filmA, filmB) =>
  filmA.year - filmB.year || sortByTitleAscending(filmA, filmB);
const sortByReleaseDateDescending = (filmA, filmB) =>
  filmB.year - filmA.year || sortByTitleAscending(filmA, filmB);

const sortByDurationAscending = (filmA, filmB) =>
  parseInt(filmA.duration, 10) - parseInt(filmB.duration, 10) ||
  sortByTitleAscending(filmA, filmB);

const sortByDurationDescending = (filmA, filmB) =>
  parseInt(filmB.duration, 10) - parseInt(filmA.duration, 10) ||
  sortByTitleAscending(filmA, filmB);

const getSortCompareFunc = (sortCriterion, sortIsAscending) => {
  switch (sortCriterion) {
    case 'title':
      // return func variation based on sortIsAscending
      return sortIsAscending ? sortByTitleAscending : sortByTitleDescending;
    case 'director':
      return sortIsAscending
        ? sortByDirectorAscending
        : sortByDirectorDescending;
    case 'duration':
      return sortIsAscending
        ? sortByDurationAscending
        : sortByDurationDescending;
    case 'year':
      return sortIsAscending
        ? sortByReleaseDateAscending
        : sortByReleaseDateDescending;
    default:
      // will fire if changed to 'sort'; defaults to alphabetical titles
      return sortByTitleAscending;
  }
};

const postsPerPage = 12;

export default function AllFilms() {
  const [sortBy, setSortBy] = useState('title');
  const [sortIsAscending, setSortIsAscending] = useState(true);
  const ref = useRef();

  useEffect(() => {
    document.title = 'All Films - NetStruck';
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, []);

  const { state } = useNetStruckDataState();
  // make a copy of films, so that we aren't mutating original order
  const [...filmData] = state.films;
  const { isLoading } = state;

  const compareFunc = getSortCompareFunc(sortBy, sortIsAscending);
  filmData.sort(compareFunc);

  const { currentPosts, loadMore } = usePagination(postsPerPage, filmData);

  const filmDataLength = filmData.length;

  return (
    <main className="md:px-12 py-16">
      <h1 className="sr-only" tabIndex="-1" ref={ref}>
        NetStruck All Films
      </h1>
      <FilmTableViewOptions
        sortIsAscending={sortIsAscending}
        filmDataLength={filmDataLength}
        toggleSortDirection={() => setSortIsAscending(!sortIsAscending)}
        selectCustom={
          <SelectCustom
            options={options}
            name="allFilmsSorter"
            id="allFilmsSorter"
            controls="filmTable"
            sortBy={sortBy}
            handleChange={e => setSortBy(e.target.value)}
          />
        }
      />
      <WithLoadingIndicator
        isLoading={isLoading}
        render={() => (
          <FilmTable>
            <InfiniteScroller loadMore={loadMore} isTable>
              <FilmRows filmData={currentPosts} />
            </InfiniteScroller>
          </FilmTable>
        )}
      />
    </main>
  );
}
