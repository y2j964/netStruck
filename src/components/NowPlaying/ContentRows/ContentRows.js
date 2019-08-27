import React, { memo, useContext } from 'react';
import ContentRow from './ContentRow';
import { FilmDataContext } from '../../../context';

export default function ContentRows() {
  const context = useContext(FilmDataContext);
  const rowFrags = context.featuredGenres.map(genre => (
    <ContentRow {...genre} key={genre.id} />
  ));
  console.log('rows rendered');
  return <React.Fragment>{rowFrags}</React.Fragment>;
}

// function areEqual(prevProps, nextProps) {
//   console.log('stop');
//   return prevProps !== nextProps;
// }

// export default memo(ContentRows, areEqual);
