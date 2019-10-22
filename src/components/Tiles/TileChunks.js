import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TileGroup from './TileGroup';
import Spinner from '../../icons/Spinner';
import InfiniteScroller from '../InfiniteScroller';
import useWindowWidth from '../../utilityFunctions/useWindowWidth';
import usePaginatedPosts from '../../utilityFunctions/usePaginatedPosts';
import getUpdatedSlidesPerPosition from '../../utilityFunctions/getUpdatedSlidesPerPosition';
import chunk from '../../utilityFunctions/chunk';

// represents number of rows
const postsPerPage = 3;

export default function TileChunks({ filmGroupData, isLazyLoaded }) {
  // initialize slidesPerPosition with value of 0
  // but it will be changed respective to the windowWidth asap
  const [slidesPerPosition, setSlidesPerPosition] = useState(0);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    getUpdatedSlidesPerPosition(windowWidth, slidesPerPosition).then(res =>
      setSlidesPerPosition(res),
    );
  }, [windowWidth, filmGroupData.length, slidesPerPosition]);

  const tileRows =
    slidesPerPosition !== 0 ? chunk(filmGroupData, slidesPerPosition) : [];
  const [currentPosts, loadMore] = usePaginatedPosts(postsPerPage, tileRows);

  // loading state; waiting for getUpdatedSlidesPerPosition to calculate an accurate slidesPerPosition value
  if (slidesPerPosition === 0) {
    return null;
  }

  if (isLazyLoaded) {
    const tileRowFrags = currentPosts.map((row, i) => (
      <TileGroup
        key={i}
        filmGroupData={row}
        slidesPerPosition={slidesPerPosition}
      />
    ));
    return (
      <React.Fragment>
        <InfiniteScroller loadMore={loadMore}>{tileRowFrags}</InfiniteScroller>
      </React.Fragment>
    );
  }

  const tileRowFrags = tileRows.map((row, i) => (
    <TileGroup
      key={i}
      filmGroupData={row}
      slidesPerPosition={slidesPerPosition}
    />
  ));
  return <React.Fragment>{tileRowFrags}</React.Fragment>;
}

TileChunks.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  isLazyLoaded: PropTypes.bool,
};
