import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilmRow({
  img,
  title,
  duration,
  year,
  director,
  slug,
}) {
  return (
    <tr className='film-table__row'>
      <td className='film-table__thumbnail'>
        <div className='ratio-16-9'>
          <img src={img} alt='' />
        </div>
      </td>
      <td className='film-table__title'>
        {title}
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <Link
          className='tr-overlay'
          to={`/now-playing/${slug}`}
          aria-label={`${title} info page`}
        ></Link>
      </td>
      <td className='film-table__director'>{director}</td>
      <td className='film-table__duration'>{duration}</td>
      <td className='film-table__year'>{year}</td>
    </tr>
  );
}

FilmRow.propTypes = {
  img: PropTypes.string.isRequired,
  // alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
  slug: PropTypes.string,
};
