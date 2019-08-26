import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SliderRow from './SliderRow';
import { FilmDataContext } from '../../../context';

// const getFilmsOfSameGenre = (films, category) => {
//   const filmsOfSameGenre = films.filter(film => film.genre.includes(category));
//   return filmsOfSameGenre;
// };

function ContentRow({ category }) {
  const context = useContext(FilmDataContext);
  const filmsOfSameGenre = context.getFilmsOfSameGenre(category);

  const genreSlug = category.toLowerCase().replace(/\s/g, '-');
  console.log('row rendered');

  return (
    <div className='content-row'>
      <div className='content-row__header'>
        <h2 className='content-row__title'>{category}</h2>
        <Link to={{
          pathname: `now-playing/genre/${genreSlug}`,
          category,
          filmsOfSameGenre,
          }} className='text-white'>
          See More
        </Link>
      </div>
      <SliderRow
        filmGroupData={filmsOfSameGenre}
        updateSliderVisibility={context.updateSliderVisibility}
      />
    </div>
  );
}

ContentRow.propTypes = {
  // filmGroupData: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  // activateRelevantSlides: PropTypes.func.isRequired,
};

function areEqual(prevProps, nextProps) {
  return prevProps !== nextProps;
}

export default memo(ContentRow, areEqual);
