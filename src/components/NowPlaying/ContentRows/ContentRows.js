import React from 'react';
import uuid from 'uuid';
import ContentRow from './ContentRow';
import { FilmDataConsumer } from '../../../context';

const getGenres = films => {
  const genres = [];
  films.forEach(film => {
    film.genre.forEach(genre => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });
  return genres;
};

export default function ContentRows() {
  return (
    <FilmDataConsumer>
      {({ filmData }) => {
        const genres = getGenres(filmData);
        const rowFrags = genres.map(genre => (
          <ContentRow category={genre} key={uuid.v4()} />
        ));
        return <React.Fragment>{rowFrags}</React.Fragment>;
      }}
    </FilmDataConsumer>
  );
}
