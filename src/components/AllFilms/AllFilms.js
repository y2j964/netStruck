import React from 'react';
import FilmTable from './FilmTable';

export default function AllFilms() {
  return (
    <div>
      <h2 className='text-3xl text-white'>All Films</h2>
      <span className='text-white'>600 Results</span>
      <FilmTable />
    </div>
  );
}
