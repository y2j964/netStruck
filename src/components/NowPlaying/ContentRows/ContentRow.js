import React from 'react';
import PropTypes from 'prop-types';
import SliderRow from './SliderRow';
import { FilmDataConsumer } from '../../../context';

const getFilmsOfSameGenre = (films, category) => {
  const filmsOfSameGenre = films.filter(film => film.genre.includes(category));
  return filmsOfSameGenre;
};

export default function ContentRow({ category }) {
  return (
    <FilmDataConsumer>
      {({ filmData }) => {
        const filmsOfSameGenre = getFilmsOfSameGenre(filmData, category);
        return (
          <div className='content-row'>
            <div className='content-row__header flex justify-between px-4-percent'>
              <h2 className='content-row__title text-white mb-2'>{category}</h2>
              <a href='' className='text-white'>
                See More
              </a>
            </div>
            <SliderRow filmGroupData={filmsOfSameGenre} />
          </div>
        );
      }}
    </FilmDataConsumer>
  );
}

ContentRow.propTypes = {
  filmGroupData: PropTypes.array.isRequired,
  category: PropTypes.array.isRequired,
  activateRelevantSlides: PropTypes.func.isRequired,
};
