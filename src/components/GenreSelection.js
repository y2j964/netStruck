import React, { useState, useEffect, useContext } from 'react';
import StaticTileGroup from './NowPlaying/ContentRows/StaticTileGroup';
import { FilmDataContext } from '../context';

// const toggleDescriptionIsExpanded = () =>
//   setDescriptionIsExpanded(!descriptionIsExpanded);

export default function FilmPage({ location }) {
  // const [slug, setSlug] = useState(match.params.slug);
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const context = useContext(FilmDataContext);
  const { addGroupToMyList, isLoading } = context;

  const { name, description, poster, filmsOfSameGenre } = location;

  const addAllToMyList = () => {
    const targetedFilmIds = filmsOfSameGenre.map(film => film.id);
    addGroupToMyList(targetedFilmIds);
    // console.log(filmsOfSameGenre);
    // dispatchAllToMyList(filmsOfSameGenre);
  };

  // useEffect(() => {
  //   // const filmObj = context.getFilm(slug);
  // }, [slug]);

  console.log(isLoading);

  if (isLoading) {
    return <p>Is loading . . . </p>;
  }
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
            <button className='watch-btn mr-4 mb-4' onClick={addAllToMyList}>
              ADD ALL TO MYLIST
            </button>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={poster} alt='' />
          </div>
        </div>
      </div>
      <StaticTileGroup filmsOfSameGenre={filmsOfSameGenre} />
    </div>
  );
}
