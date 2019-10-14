import { useState } from 'react';

export default function usePaginatedPosts(postsPerPage, dataSrc) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = 0;
  const currentPosts = dataSrc.slice(firstPostIndex, lastPostIndex);

  const loadMore = () => {
    if (currentPosts.length === dataSrc.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  return [currentPosts, loadMore, setCurrentPage];
}
