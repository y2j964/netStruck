import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnPrimary from '../../components/BtnPrimary/BtnPrimary';
import {
  useNetStruckDataState,
  useNetStruckDataDispatcher,
} from '../../NetStruckDataContext';

export default function SelectionItem({ match }) {
  const { slug } = match.params;
  const { state, featuredGenres } = useNetStruckDataState();

  const getFilm = targetSlug =>
    state.films.find(film => film.slug === targetSlug);

  const getFeaturedGenreSlug = name =>
    featuredGenres.find(featuredGenre => featuredGenre.name === name).slug;

  const dispatch = useNetStruckDataDispatcher();

  const selectedFilm = getFilm(slug);
  const {
    title,
    director,
    duration,
    year,
    actors,
    img,
    description,
    genres,
    isAddedToMyList,
  } = selectedFilm;

  const ref = useRef();
  useEffect(() => {
    document.title = `${title} - NetStruck`;
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, [title]);

  useEffect(() => {
    // When the search modal is open, you can navigate to films returned by SearchResults.
    // If the user does this, close the modal on navigation
    dispatch({ type: 'CLOSE_MODAL' });
  }, [dispatch]);

  const genreLinks = genres.map((name, index) => (
    <React.Fragment key={index}>
      {index > 0 && ', '}
      <Link
        className="underline"
        to={`/now-playing/genre/${getFeaturedGenreSlug(name)}`}
      >
        {name}
      </Link>
    </React.Fragment>
  ));

  const addToMyList = () => {
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: slug });
  };

  return (
    <main>
      <div className="selection">
        <div className="selection__info">
          <h1 className="selection__title" tabIndex="-1" ref={ref}>
            {title}
          </h1>
          <p className="selection__text mb-1">{`Directed by ${director} • ${year} • ${duration}`}</p>
          <p className="selection__text mb-1">{`Starring: ${actors.join(
            ', '
          )}`}</p>
          <p className="selection__text mb-3">
            Genres: <React.Fragment>{genreLinks}</React.Fragment>
          </p>
          <p className="selection__text mb-6" id="selectionDescription">
            {description}
          </p>
          <div className="flex flex-wrap">
            <BtnPrimary additionalClasses="mr-4" handleClick={addToMyList}>
              {isAddedToMyList ? 'REMOVE FROM MYLIST' : 'ADD TO MYLIST'}
            </BtnPrimary>
          </div>
        </div>
        <div className="selection__poster">
          <div className="ratio-16-9">
            <picture>
              <source
                sizes="(min-width: 800px) calc(50vw - 0.5rem), 100vw"
                srcSet={`${img.webp400} 400w,
				  ${img.webp640} 640w,
				  ${img.webp800} 800w,
				  ${img.webp1024} 1024w,
				  ${img.webp1200} 1200w,`}
                type="image/webp"
              />
              <source
                sizes="(min-width: 800px) calc(50vw - 0.5rem), 100vw"
                srcSet={`${img.jpg400} 400w,
				  ${img.jpg640} 640w,
				  ${img.jpg800} 800w,
				  ${img.jpg1024} 1024w,
				  ${img.jpg1200} 1200w,`}
              />
              <img src={img.jpg800} alt="" />
            </picture>
          </div>
        </div>
      </div>
      <div className="selection__content">
        <div className="tile">
          <div className="ratio-16-9">
            <picture>
              <source sizes="100vw" srcSet={img.webp400} type="image/webp" />
              <source srcSet={img.jpg400} />
              <img src={img.jpg400} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </main>
  );
}

SelectionItem.propTypes = {
  match: PropTypes.object.isRequired,
};
