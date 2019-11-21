import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TileChunks from '../../components/Tiles/TileChunks';
import { useNetStruckDataState } from '../../NetStruckDataContext';
import useResponsivePagination from '../../utilityFunctions/useResponsivePagination';
import InfiniteScroller from '../../components/InfiniteScroller';

const postsPerPageMinimum = 6;

export default function SelectionGenre({ match }) {
  const { slug } = match.params;
  const { featuredGenres, getFilmsOfSameGenre } = useNetStruckDataState();

  const getFeaturedGenreData = targetSlug =>
    featuredGenres.find(featuredGenre => featuredGenre.slug === targetSlug);

  const genreData = getFeaturedGenreData(slug);
  const { name, description, poster } = genreData;

  const filmsOfSameGenre = getFilmsOfSameGenre(name);

  const ref = useRef();
  useEffect(() => {
    document.title = `${name} - NetStruck`;
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, [name]);

  const { currentPosts, loadMore, itemsPerPosition } = useResponsivePagination(
    postsPerPageMinimum,
    filmsOfSameGenre
  );

  return (
    <main>
      <div className="selection">
        <div className="selection__info">
          <h1 className="selection__title" tabIndex="-1" ref={ref}>
            {name}
          </h1>
          <p className="selection__text mb-6" id="selectionDescription">
            {description}
          </p>
          <div className="flex flex-wrap">
            <Link to={'/signup'} className="btn-primary btn-primary--wider">
              SIGN UP
            </Link>
          </div>
        </div>
        <div className="selection__poster">
          <div className="ratio-16-9">
            <picture>
              <source
                sizes="(min-width: 800px) calc(50vw - 0.5rem), 100vw"
                srcSet={`${poster.webp400} 400w,
                  ${poster.webp640} 640w,
                  ${poster.webp800} 800w,
                  ${poster.webp1024} 1024w,
                  ${poster.webp1200} 1200w,`}
                type="image/webp"
              />
              <source
                sizes="(min-width: 800px) calc(50vw - 0.5rem), 100vw"
                srcSet={`${poster.jpg400} 400w,
                  ${poster.jpg640} 640w,
                  ${poster.jpg800} 800w,
                  ${poster.jpg1024} 1024w,
                  ${poster.jpg1200} 1200w,`}
              />
              <img src={poster.jpg800} alt="" />
            </picture>
          </div>
        </div>
      </div>
      <div className="selection__content">
        <InfiniteScroller loadMore={loadMore}>
          <TileChunks
            filmGroupData={currentPosts}
            tilesPerPosition={itemsPerPosition}
          />
        </InfiniteScroller>
      </div>
    </main>
  );
}

SelectionGenre.propTypes = {
  match: PropTypes.object.isRequired,
};
