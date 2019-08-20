import React, { useContext } from 'react';
import { FilmDataContext } from '../../context';
import FilmRow from './FilmRow';

export default function FilmRows() {
  const context = useContext(FilmDataContext);
  if (context.isLoading) {
    return <p>Waiting on content . . .</p>;
  }
  const filmRowFrags = context.state.filteredFilms.map(entry => (
    <FilmRow
      key={entry.id}
      img={entry.img}
      title={entry.title}
      director={entry.director}
      duration={entry.duration}
      year={entry.year}
    />
  ));

  return <React.Fragment>{filmRowFrags}</React.Fragment>;
}
