import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnPrimary from '../../components/BtnPrimary/BtnPrimary';
import { useFilmGetSet } from '../../context';

export default function SelectionItem({ match }) {
  const { slug } = match.params;
  const { getFilm, dispatch, getFeaturedGenreSlug } = useFilmGetSet();

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
    id,
    isAddedToMyList,
  } = selectedFilm;

  useEffect(() => {
    document.title = `${title} - NetStruck`;
  }, [title]);

  useEffect(() => dispatch({ type: 'CLOSE_MODAL' }), [dispatch]);

  const genreLinks = genres.map((name, index) => (
    <React.Fragment key={index}>
      {index > 0 && ', '}
      <Link
        className='underline'
        to={`/now-playing/genre/${getFeaturedGenreSlug(name)}`}
      >
        {name}
      </Link>
    </React.Fragment>
  ));

  const addToMyList = () => {
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });
  };

  return (
    <main>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{title}</h2>
          <p className='selection__text mb-1'>{`Directed by ${director} • ${year} • ${duration}`}</p>
          <p className='selection__text mb-1'>{`Starring ${actors}`}</p>
          <p className='selection__text mb-3'>
            Genres: <React.Fragment>{genreLinks}</React.Fragment>
          </p>
          <p className='selection__text mb-8' id='selectionDescription'>
            {description}
          </p>
          <div className='flex flex-wrap'>
            <BtnPrimary
              additionalClasses={'mr-4 mb-4'}
              handleClick={addToMyList}
            >
              {isAddedToMyList ? 'REMOVE FROM MYLIST' : 'ADD TO MYLIST'}
            </BtnPrimary>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <div className='selection__content'>
          <div className='ratio-16-9'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </main>
  );
}

SelectionItem.propTypes = {
  match: PropTypes.object.isRequired,
};
