import React from 'react';
import ContentRow from './ContentRow';
import { useNetStruckDataState } from '../../context';

export default function ContentRows() {
  const { featuredGenres } = useNetStruckDataState();

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
