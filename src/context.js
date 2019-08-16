import React, { useReducer, useEffect, useState, useMemo } from 'react';
import filmData from './filmData';

export const FilmDataContext = React.createContext();

const filmDataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_MYLIST':
      return state.map(film => {
        if (film.id === action.id) {
          return { ...film, addedToMyList: true };
        }
        return film;
      });

    case 'UPDATE_SLIDER_VISIBILITY':
      console.log(action.id);
      return;
    // return state.map(film => {
    //   if (film.id === action.id) {
    //     return { ...film, isVisibleToSlider: true };
    //   }
    //   return film;
    // });

    case 'TOGGLE_MODAL':
      return !state.modalIsOpen;

    case 'CONTENT_LOADED':
      return !state.isLoading;

    default:
      return state;
  }
};

const getInitialFilmData = () => {
  let updatedFilms = [];
  filmData.forEach(film => {
    const singleItem = { ...film };
    updatedFilms = [...updatedFilms, singleItem];
  });

  return updatedFilms;
};

const getFilmGenres = dataSource => {
  const genres = [];
  dataSource.forEach(film => {
    film.genre.forEach(genre => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });
  return genres;
};

const FilmDataProvider = props => {
  const [initialState, setInitialState] = useState([]);
  const [filmGenres, setFilmGenres] = useState([]);
  const [state, dispatch] = useReducer(filmDataReducer, [
    {
      isLoading: true,
      modalIsOpen: false,
      myList: [],
      films: initialState || [],
    },
  ]);

  useEffect(() => {
    const updatedState = getInitialFilmData();
    setInitialState(updatedState);
    setFilmGenres(getFilmGenres(updatedState));
    dispatch({ type: 'CONTENT_LOADED' });
  }, []);

  // setFilmGenres(getFilmGenres);

  // const [myCart, setMyCart] = useState([]);

  const getFilmsOfSameGenre = category => {
    const filmsOfSameGenre = initialState.filter(film =>
      film.genre.includes(category),
    );
    return filmsOfSameGenre;
  };

  const updateSliderVisibility = films => {
    dispatch({ type: 'UPDATE_SLIDER_VISIBILITY', id: films });
  };

  return (
    <FilmDataContext.Provider
      value={{
        state,
        updateSliderVisibility,
        filmGenres,
        getFilmsOfSameGenre,
      }}
    >
      {props.children}
    </FilmDataContext.Provider>
  );
};

export { FilmDataProvider };
