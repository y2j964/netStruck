import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SliderRow from '../SliderRow/SliderRow';
import RightArrow from '../../icons/RightArrow';

import { useNetStruckDataState } from '../../context';

function ContentRow({ name, slug }) {
  const { getFilmsOfSameGenre } = useNetStruckDataState();
  const filmsOfSameGenre = getFilmsOfSameGenre(name);

  return (
    <div className='content-row'>
      <div className='content-row__header'>
        <h2 className='content-row__title'>
          <Link to={`now-playing/genre/${slug}`}>{name}</Link>
        </h2>
      </div>
      <SliderRow filmGroupData={filmsOfSameGenre} />
    </div>
  );
}

ContentRow.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.object.isRequired,
};

// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps;
// }

export default ContentRow;
