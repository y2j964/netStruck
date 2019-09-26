import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SliderRow from '../SliderRow/SliderRow';
import { useNetStruckDataState } from '../../context';

function ContentRow({ name, slug }) {
  const { getFilmsOfSameGenre } = useNetStruckDataState();
  const filmsOfSameGenre = getFilmsOfSameGenre(name);

  return (
    <div className='content-row'>
      <div className='content-row__header'>
        <h2 className='content-row__title'>{name}</h2>
        <Link
          to={`now-playing/genre/${slug}`}
          className='content-row__see-more'
        >
          See More
        </Link>
      </div>
      <SliderRow filmGroupData={filmsOfSameGenre} />
    </div>
  );
}

ContentRow.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default ContentRow;
