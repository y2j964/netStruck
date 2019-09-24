import React from 'react';
import ContentRow from './ContentRow';
import { useFilmValues } from '../../context';

export default function ContentRows() {
  const { featuredGenres } = useFilmValues();

  const rowFrags = featuredGenres.map(genre => (
    <ContentRow {...genre} key={genre.id} />
  ));

  return <React.Fragment>{rowFrags}</React.Fragment>;
}

// function areEqual(prevProps, nextProps) {
//   console.log('stop');
//   return prevProps === nextProps;
// }

// export default memo(ContentRows, areEqual);
