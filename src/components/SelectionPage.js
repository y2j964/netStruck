import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ChevronDown from '../icons/ChevronDown';
import { useFilmGetSet } from '../context';

export default function SelectionPage({ match }) {
  // const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);

  const { slug } = match.params;
  const { getFilm, dispatch } = useFilmGetSet();

  console.log(getFilm);
  const selectedFilm = getFilm(slug);

  useEffect(() => {
    document.title = `${selectedFilm.title} - NetStruck`;
  }, [selectedFilm.title]);

  const addToMyList = () => {
    console.log(selectedFilm);
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: selectedFilm.id });
  };

  // useEffect(() => {
  //   const selectedFilm = context.getFilm(slug);
  // }, [slug]);

  return (
    <div>
      <div className='selection'>
        <div className='selection__info'>
          <h2 className='selection__title'>{selectedFilm.title}</h2>
          <p className='selection__text'>{`Directed by ${selectedFilm.director} • ${selectedFilm.year} • ${selectedFilm.duration}`}</p>
          <p className='selection__text mb-3'>{`Starring ${selectedFilm.actors}`}</p>
          <p className='selection__text mb-8' id='selectionDescription'>
            {selectedFilm.description}
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
            <Link className='watch-btn mr-4 mb-4'>SIGN UP</Link>
            <button className='watch-btn mr-4 mb-4'>TRAILER</button>
            <button className='watch-btn mr-4 mb-4' onClick={addToMyList}>
              {selectedFilm.isAddedToMyList
                ? 'REMOVE FROM MYLIST'
                : 'ADD TO MYLIST'}
            </button>
          </div>
        </div>
        <div className='selection__poster'>
          <div className='ratio-16-9'>
            <img src={selectedFilm.img} alt='' />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <div className='selection__content'>
          <div className='ratio-16-9'>
            <img src={selectedFilm.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

SelectionPage.propTypes = {
  match: PropTypes.object.isRequired,
};
