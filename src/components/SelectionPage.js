import React, { useState, useEffect, useContext } from 'react';
// import ChevronDown from '../icons/ChevronDown';
import { FilmDataContext } from '../context';

// const toggleDescriptionIsExpanded = () =>
//   setDescriptionIsExpanded(!descriptionIsExpanded);

export default function FilmPage({ match }) {
  const [slug, setSlug] = useState(match.params.slug);
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const context = useContext(FilmDataContext);
  const { getFilm, isLoading } = context;
  const filmObj = getFilm(slug);

  useEffect(() => {
    // const filmObj = context.getFilm(slug);
  }, [slug]);

  console.log(isLoading);

  if (isLoading) {
    return <p>Is loading . . . </p>;
  }
  return (
    <div>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{filmObj.title}</h2>
          <p className='selection__text'>{`Directed by ${filmObj.director} • ${filmObj.year} • ${filmObj.duration}`}</p>
          <p className='selection__text mb-3'>{`Starring ${filmObj.actors}`}</p>
          <p className='selection__text mb-8' id='selectionDescription'>
            {filmObj.description}
          </p>
          {/* <button
            className='text-white text-sm mb-8 font-bold pr-5 relative'
            aria-controls='selectionDescription'
            onClick={toggleDescriptionIsExpanded}
          > */}
          {/* {`Show ${descriptionIsExpanded ? 'less' : 'more'}`} */}
          {/* <ChevronDown
              svgClassName={`chevron-toggler${
                descriptionIsExpanded ? ' chevron-toggler--is-flipped' : ' '
              } absolute right-0 bottom-0`} */}
          {/* /> */}
          {/* </button> */}
          <div className='flex flex-wrap'>
            <button className='watch-btn mr-4 mb-4'>SIGN UP</button>
            <button className='watch-btn mr-4 mb-4'>TRAILER</button>
            <button className='watch-btn mr-4 mb-4'>ADD TO MYLIST</button>
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
