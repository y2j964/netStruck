import React from 'react';
import PropTypes from 'prop-types';

export default function FilmTable({ children }) {
  return (
    <table className='film-table' id='filmTable'>
      <thead className='film-table__thead'>
        <tr className='film-table__header-row'>
          <th className='film-table__thumbnail film-table__header'>TITLE</th>
          <th className='film-table__title film-table__header'></th>
          <th className='film-table__director film-table__header'>DIRECTOR</th>
          <th className='film-table__duration film-table__header'>DURATION</th>
          <th className='film-table__year film-table__header'>YEAR</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

FilmTable.propTypes = {
  children: PropTypes.node.isRequired,
};
