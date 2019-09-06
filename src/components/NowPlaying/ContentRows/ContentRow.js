import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SliderRow from './SliderRow';
import { useFilmGetSet } from '../../../context';

// const getFilmsOfSameGenre = (films, category) => {
//   const filmsOfSameGenre = films.filter(film => film.genre.includes(category));
//   return filmsOfSameGenre;
// };

function ContentRow({ name, slug, description, poster }) {
  const { getFilmsOfSameGenre, dispatch } = useFilmGetSet();

  const filmsOfSameGenre = getFilmsOfSameGenre(name);
  console.log(filmsOfSameGenre);
  const updateSliderVisibility = films =>
    dispatch({ type: 'UPDATE_SLIDER_VISIBILITY', id: films });

  console.log('row rendered');

  return (
    <div className='content-row'>
      <div className='content-row__header'>
        <h2 className='content-row__title'>{name}</h2>
        <Link to={`now-playing/genre/${slug}`} className='text-white'>
          See More
        </Link>
      </div>
      <SliderRow
        filmGroupData={filmsOfSameGenre}
        updateSliderVisibility={updateSliderVisibility}
      />
    </div>
  );
}

ContentRow.propTypes = {
  // filmGroupData: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // activateRelevantSlides: PropTypes.func.isRequired,
};

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default ContentRow;
