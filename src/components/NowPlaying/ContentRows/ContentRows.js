import React, { memo, useEffect, useContext } from 'react';
import uuid from 'uuid';
import ContentRow from './ContentRow';
import { FilmDataContext } from '../../../context';

// const getGenres = films => {
//   const genres = [];
//   films.forEach(film => {
//     film.genre.forEach(genre => {
//       if (!genres.includes(genre)) {
//         genres.push(genre);
//       }
//     });
//   });
//   return genres;
// };

export default function ContentRows() {
  const context = useContext(FilmDataContext);
  const rowFrags = context.filmGenres.map(genre => (
    <ContentRow category={genre} key={uuid.v4()} />
  ));
  console.log('rows rendered');
  return <React.Fragment>{rowFrags}</React.Fragment>;
}

// function areEqual(prevProps, nextProps) {
//   console.log('stop');
//   return prevProps !== nextProps;
// }

// export default memo(ContentRows, areEqual);
