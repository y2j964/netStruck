import React, { useState } from 'react';
import ContentRow from './ContentRow';
import InfiniteScroller from '../InfiniteScroller';
import { useNetStruckDataState } from '../../context';
import usePaginatedPosts from '../../utilityFunctions/usePaginatedPosts';

const postsPerPage = 4;

export default function ContentRows() {
  const { featuredGenres } = useNetStruckDataState();
  const [currentPosts, loadMore] = usePaginatedPosts(
    postsPerPage,
    featuredGenres,
  );

  const rowFrags = currentPosts.map(genre => (
    <ContentRow {...genre} key={genre.id} />
  ));

  return (
    <InfiniteScroller loadMore={loadMore} trigger={<h2>help</h2>}>
      {rowFrags}
    </InfiniteScroller>
  );
}
