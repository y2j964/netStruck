import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TileChunks from '../../components/Tiles/TileChunks';
import { useNetStruckDataState } from '../../context';

export default function SelectionGenre({ match }) {
  const { slug } = match.params;
  const { featuredGenres, getFilmsOfSameGenre } = useNetStruckDataState();

  const getFeaturedGenreData = targetSlug =>
    featuredGenres.find(featuredGenre => featuredGenre.slug === targetSlug);

  const genreData = getFeaturedGenreData(slug);
  const { name, description, poster } = genreData;

  const filmsOfSameGenre = getFilmsOfSameGenre(name);

  useEffect(() => {
    document.title = `${name} - NetStruck`;
  }, [name]);

  return (
    <main>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{name}</h2>
          <p className='selection__text mb-8' id='selectionDescription'>
            {description}
          </p>
          <div className='flex flex-wrap'>
            <Link to={'/signup'} className='btn-primary btn-primary--wider'>
              SIGN UP
            </Link>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={poster} alt='' />
          </div>
        </div>
      </div>
      {/* <div className='p-10 mb-10 mx-auto'> */}
      <div className='px-4 md:px-10 mb-10'>
        <TileChunks filmGroupData={filmsOfSameGenre} />
      </div>
    </main>
  );
}

SelectionGenre.propTypes = {
  match: PropTypes.object.isRequired,
};
