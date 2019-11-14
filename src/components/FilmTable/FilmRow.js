import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { imgTypeMini } from '../../netStruckDataTypes';

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
        <div className='ratio-16-9 ratio-16-9--left-aligned'>
          <picture>
            <source srcSet={img.webp400} type='image/webp' />
            <source srcSet={img.jpg400} />
            <img src={img.jpg400} alt='' />
          </picture>
        </div>
      </td>
      <td className='film-table__title'>
        {title}
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
  img: imgTypeMini,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
