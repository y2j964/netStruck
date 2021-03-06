import React from 'react';
import PropTypes from 'prop-types';
import { netStruckDataTypes } from '../../netStruckDataTypes';
import FilmRow from './FilmRow';

export default function FilmRows({ filmData }) {
  const filmRowFrags = filmData.map(entry => (
    <FilmRow
      key={entry.id}
      img={entry.img}
      title={entry.title}
      director={entry.director}
      duration={entry.duration}
      year={entry.year}
      slug={entry.slug}
    />
  ));

  return filmRowFrags;
}

FilmRows.propTypes = {
  filmData: PropTypes.arrayOf(netStruckDataTypes).isRequired,
};
