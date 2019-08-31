/* eslint-disable no-param-reassign */
import React, { useReducer, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import netStruckData from './netStruckData';

const FilmValuesContext = React.createContext();
const FilmGetSetContext = React.createContext();

const getUpdatedMyList = (dataSource, film) => {
  if (film.isAddedToMyList) {
    const updatedMyList = dataSource.concat(film);
    return updatedMyList;
  }
  const updatedMyList = dataSource.filter(item => item.id !== film.id);
  return updatedMyList;
};

const filmDataReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILM_MYLIST_STATE': {
      const updatedFilms = [...state.films];
      const targetedFilm = updatedFilms.find(film => film.id === action.id);

      // updated isAddedToMyList bool
      // will mutate updatedFilms (which we want--note that we aren't mutating state directly)
      // b/c objects are nested in array
      targetedFilm.isAddedToMyList = !targetedFilm.isAddedToMyList;

      // update MyList array
      const updatedMyList = getUpdatedMyList(state.myList, targetedFilm);

      return { ...state, films: updatedFilms, myList: updatedMyList };
    }

    case 'ADD_GROUP_TO_MYLIST': {
      const prevMyListIds = state.myList.map(film => film.id);
      // return films that aren't already in myList
      const newlyAddedFilms = action.id.filter(
        film => !prevMyListIds.includes(film.id),
      );
      const updatedMyList = state.myList.concat(newlyAddedFilms);

      const targetedFilmIds = action.id.map(film => film.id);

      const updatedFilms = state.films.map(film => {
        if (targetedFilmIds.includes(film.id)) {
          film.isAddedToMyList = true;
          return film;
        }
        return film;
      });
      return { ...state, films: updatedFilms, myList: updatedMyList };
    }

    case 'REMOVE_GROUP_FROM_MYLIST': {
      const updatedFilms = state.films.map(film => {
        if (action.id.includes(film.id)) {
          film.isAddedToMyList = false;
          return film;
        }
        return film;
      });
      return { ...state, films: updatedFilms };
    }

    case 'UPDATE_SLIDER_VISIBILITY':
      // console.log(action.id);
      return state;
    // return state.map(film => {
    //   if (film.id === action.id) {
    //     return { ...film, isVisibleToSlider: true };
    //   }
    //   return film;
    // });

    // case 'TOGGLE_MODAL':
    //   return {...state, modalIsOpen: !modalIsOpen};

    case 'CONTENT_LOADED':
      return {
        ...state,
        films: action.id,
        isLoading: false,
      };

    default:
      return state;
  }
};

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
    modalIsOpen: false,
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
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}
function useFilmGetSet() {
  const context = useContext(FilmGetSetContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}

export { FilmDataProvider, useFilmValues, useFilmGetSet };

FilmDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
