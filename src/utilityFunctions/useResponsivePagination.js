import { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';
import usePaginatedPosts from './usePaginatedPosts';
import getUpdatedSlidesPerPosition from './getUpdatedTilesPerPosition';

export default function useResponsivePagination(postsPerPageMinimum, dataSrc) {
  const windowWidth = useWindowWidth();
  // for pagination to be responsive, we need window width and itemsPerPosition
  const [itemsPerPosition, setItemsPerPosition] = useState();

  // when windowWidth changes, update itemsPerPosition
  useEffect(() => {
    getUpdatedSlidesPerPosition(windowWidth, itemsPerPosition).then(res =>
      setItemsPerPosition(res),
    );
  }, [windowWidth, itemsPerPosition]);

  // take the postsPerPageMinimum if the latter value is too paltry
  const postsPerPage = Math.max(postsPerPageMinimum, itemsPerPosition * 2);
  // break up filtered films into tranches via pagination
  const { currentPosts, loadMore, setCurrentPage } = usePaginatedPosts(
    postsPerPage,
    dataSrc,
  );

  return { currentPosts, setCurrentPage, loadMore, itemsPerPosition };
}
