import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ChevronDown from '../icons/ChevronDown';
import { useFilmGetSet } from '../context';

export default function SelectionPage({ match }) {
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const { slug } = match.params;
  const { getFilm, dispatch, getFeaturedGenreSlug } = useFilmGetSet();

  const selectedFilm = getFilm(slug);
  const {
    title,
    director,
    duration,
    year,
    actors,
    img,
    description,
    genre,
    id,
    isAddedToMyList,
  } = selectedFilm;

  useEffect(() => {
    document.title = `${title} - NetStruck`;
  }, [title]);

  const genreLinks = genre.map((name, index) => (
    <React.Fragment key={name.id}>
      {index > 0 && ', '}
      <Link
        className='underline'
        to={`/now-playing/genre/${getFeaturedGenreSlug(name)}`}
      >
        {name}
      </Link>
    </React.Fragment>
  ));

  const addToMyList = () => {
    console.log(selectedFilm);
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });
  };

  return (
    <div>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{title}</h2>
          <p className='selection__text mb-1'>{`Directed by ${director} • ${year} • ${duration}`}</p>
          <p className='selection__text mb-1'>{`Starring ${actors}`}</p>
          <p className='selection__text mb-3'>
            Genres: <React.Fragment>{genreLinks}</React.Fragment>
          </p>
          <p className='selection__text mb-8' id='selectionDescription'>
            {description}
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
            <button className='watch-btn mr-4 mb-4' onClick={addToMyList}>
              {isAddedToMyList ? 'REMOVE FROM MYLIST' : 'ADD TO MYLIST'}
            </button>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <div className='selection__content'>
          <div className='ratio-16-9'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

SelectionPage.propTypes = {
  match: PropTypes.object.isRequired,
};
