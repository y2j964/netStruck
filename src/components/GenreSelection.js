import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StaticTileGroup from './NowPlaying/ContentRows/StaticTileGroup';
import { useFilmGetSet } from '../context';

// const toggleDescriptionIsExpanded = () =>
//   setDescriptionIsExpanded(!descriptionIsExpanded);

export default function GenreSelection({ location }) {
  // const [slug, setSlug] = useState(match.params.slug);
  const [genreIsAddedToMyList, setGenreIsAddedToMyList] = useState(false);
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const { dispatch } = useFilmGetSet();

  const { name, description, poster, filmsOfSameGenre } = location;

  // const updatedIsAddedState = filmsOfSameGenre.every(
  //   ({ isAdddedToMyList }) => isAdddedToMyList === true,
  // );
  // setGenreIsAddedToMyList(updatedIsAddedState);

  useEffect(() => {
    document.title = `${name} - NetStruck`;
  }, [name]);

  const addAllToMyList = () => {
    // const targetedFilmIds = filmsOfSameGenre.map(film => film.id);
    // setGenreIsAddedToMyList(true);
    dispatch({ type: 'ADD_GROUP_TO_MYLIST', id: filmsOfSameGenre });
  };

  return (
    <div>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{name}</h2>
          {/* <p className='selection__text'>{`Directed by ${filmObj.director} • ${filmObj.year} • ${filmObj.duration}`}</p>
          <p className='selection__text mb-3'>{`Starring ${filmObj.actors}`}</p> */}
          <p className='selection__text mb-8' id='selectionDescription'>
            {description}
          </p>
          <div className='flex flex-wrap'>
            <button className='watch-btn mr-4 mb-4'>SIGN UP</button>
            {/* <button className='watch-btn mr-4 mb-4' onClick={addAllToMyList}>
              ADD ALL TO MYLIST
            </button> */}
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={poster} alt='' />
          </div>
        </div>
      </div>
      <StaticTileGroup filmList={filmsOfSameGenre} />
    </div>
  );
}

GenreSelection.propTypes = {
  location: PropTypes.object.isRequired,
  // name: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
};
