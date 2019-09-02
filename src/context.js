/* eslint-disable no-param-reassign */
import React, { useReducer, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import filmDataReducer from './filmDataReducer';
import netStruckData from './netStruckData';

const FilmValuesContext = React.createContext();
const FilmGetSetContext = React.createContext();

const getInitialFilmData = dataSource => {
  let updatedFilms = [];
  dataSource.films.forEach(film => {
    const singleItem = { ...film };
    updatedFilms = [...updatedFilms, singleItem];
  });

  return updatedFilms;
};

const getInitialGenreData = dataSource => {
  const updatedGenres = dataSource.featuredGenres.map(genre => genre);
  return updatedGenres;
};

const FilmDataProvider = props => {
  const [featuredGenres, setFeaturedGenres] = useState([]);
  const [state, dispatch] = useReducer(filmDataReducer, {
    films: [],
    myList: [],
    isLoading: true,
    modalIsOpen: true,
  });

  useEffect(() => {
    const updatedFilms = getInitialFilmData(netStruckData);
    const updatedGenres = getInitialGenreData(netStruckData);

    setFeaturedGenres(updatedGenres);
    dispatch({ type: 'CONTENT_LOADED', id: updatedFilms });
  }, []);

  // const updateSliderVisibility = films => {
  //   dispatch({ type: 'UPDATE_SLIDER_VISIBILITY', id: films });
  // };

  // const sortFilms = sortCriterion => {
  //   dispatch({ type: 'SORT_FILMS', id: sortCriterion });
  // };

  // const toggleFilmMyListState = id => {
  //   dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });
  // };

  // const addGroupToMyList = films => {
  //   dispatch({ type: 'ADD_GROUP_TO_MYLIST', id: films });
  // };

  // const removeGroupFromMyList = films => {
  //   dispatch({ type: 'REMOVE_GROUP_FROM_MYLIST', id: films });
  // };

  const getFilmsOfSameGenre = category => {
    const filmsOfSameGenre = state.films.filter(film =>
      film.genre.includes(category),
    );
    return filmsOfSameGenre;
  };

  const getFilm = slug => state.films.find(film => film.slug === slug);

  return (
    <FilmValuesContext.Provider value={{ state, featuredGenres }}>
      <FilmGetSetContext.Provider
        value={{ dispatch, getFilmsOfSameGenre, getFilm }}
      >
        {props.children}
      </FilmGetSetContext.Provider>
    </FilmValuesContext.Provider>
  );
};

function useFilmValues() {
  const context = useContext(FilmValuesContext);
  if (context === undefined) {
    throw new Error('useFilmValues must be used within a FilmDataProvider');
  }
  return context;
}
function useFilmGetSet() {
  const context = useContext(FilmGetSetContext);
  if (context === undefined) {
    throw new Error('useFilmGetSet must be used within a FilmDataProvider');
  }
  return context;
}

export { FilmDataProvider, useFilmValues, useFilmGetSet };

FilmDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
