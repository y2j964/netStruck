import React, { useState } from 'react';
import ContentRow from './ContentRow';
import InfiniteScroller from '../InfiniteScroller';
import { useNetStruckDataState } from '../../context';

const postsPerPage = 4;

export default function ContentRows() {
  const { featuredGenres } = useNetStruckDataState();
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = 0;
  const currentPosts = featuredGenres.slice(firstPostIndex, lastPostIndex);

  const loadMore = () => {
    if (currentPosts.length === featuredGenres.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const rowFrags = currentPosts.map(genre => (
    <ContentRow {...genre} key={genre.id} />
  ));

  return (
    <InfiniteScroller loadMore={loadMore} trigger={<h2>help</h2>}>
      {rowFrags}
    </InfiniteScroller>
  );
}

// function areEqual(prevProps, nextProps) {
//   console.log('stop');
//   return prevProps === nextProps;
// }

// export default memo(ContentRows, areEqual);
