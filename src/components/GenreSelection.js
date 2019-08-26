import React, { useState, useEffect, useContext } from 'react';
import { FilmDataContext } from '../context';

// const toggleDescriptionIsExpanded = () =>
//   setDescriptionIsExpanded(!descriptionIsExpanded);

export default function FilmPage({ category, filmsOfSameGenre }) {
  // const [slug, setSlug] = useState(match.params.slug);
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const context = useContext(FilmDataContext);
  const { getFilm, isLoading } = context;

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
          <h2 className='selection__title'>{category}</h2>
          {/* <p className='selection__text'>{`Directed by ${filmObj.director} • ${filmObj.year} • ${filmObj.duration}`}</p>
          <p className='selection__text mb-3'>{`Starring ${filmObj.actors}`}</p> */}
          <p className='selection__text mb-8' id='selectionDescription'>
          Some call it coming of age, we call it, with a respectful nod to Blink 182, I Guess This is Growing Up. In this collection, we present films that represent the weirdness and doubt of being a budding adolescent.
          </p>
          <div className='flex flex-wrap'>
            <button className='watch-btn mr-4 mb-4'>SIGN UP</button>
            <button className='watch-btn mr-4 mb-4'>ADD ALL TO MYLIST</button>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={filmObj.img} alt='' />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <div className='selection__content'>
          <div className='ratio-16-9'>
            <img src={filmObj.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
