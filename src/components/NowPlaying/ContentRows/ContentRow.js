import React, { memo, useContext } from 'react';
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
  console.log('row rendered');
  return (
    <div className='content-row'>
      <div className='content-row__header'>
        <h2 className='content-row__title'>{category}</h2>
        <a href='' className='text-white'>
          See More
        </a>
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
