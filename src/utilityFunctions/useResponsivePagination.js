import { useState, useEffect } from 'react';
import usePagination from './usePagination';
import { useMediaBreakpointState } from '../MediaBreakpointContext';

export default function useResponsivePagination(postsPerPageMinimum, dataSrc) {
  const [itemsPerPosition, setItemsPerPosition] = useState();

  // responsive aspect coming from here
  const updatedSlidesPerPosition = useMediaBreakpointState();

  // when new media query is hit, update itemsPerPosition
  useEffect(() => {
    setItemsPerPosition(updatedSlidesPerPosition);
  }, [updatedSlidesPerPosition, itemsPerPosition]);

  // take the postsPerPageMinimum if the latter value is too paltry
  const postsPerPage = Math.max(postsPerPageMinimum, itemsPerPosition * 2);
  // break up filtered films into tranches via pagination
  const { currentPosts, loadMore, setCurrentPage } = usePagination(
    postsPerPage,
    dataSrc,
  );

  return { currentPosts, setCurrentPage, loadMore, itemsPerPosition };
}
