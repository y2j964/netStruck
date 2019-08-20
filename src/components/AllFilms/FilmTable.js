import React from 'react';
import FilmRows from './FilmRows';
import FilmRow from './FilmRow';

export default function FilmTable() {
  return (
    <table className='film-table'>
      <thead className='film-table__thead'>
        <tr className='film-table__header-row'>
          <th className='film-table__thumbnail film-table__header'>TITLE</th>
          <th className='film-table__title film-table__header'></th>
          <th className='film-table__director film-table__header'>DIRECTOR</th>
          <th className='film-table__duration film-table__header'>DURATION</th>
          <th className='film-table__year film-table__header'>YEAR</th>
        </tr>
      </thead>
      <tbody>
        <FilmRows />
      </tbody>
    </table>
  );
}
