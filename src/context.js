/* eslint-disable no-param-reassign */
import React, { useReducer, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import filmDataReducer from './filmDataReducer';
import netStruckData from './netStruckData';

const NetStruckDataState = React.createContext();
const NetStruckDataDispatcher = React.createContext();

const getInitialGenreData = dataSource => {
  const updatedGenres = dataSource.featuredGenres.map(genre => genre);
  return updatedGenres;
};

const NetStruckDataProvider = props => {
  const [featuredGenres, setFeaturedGenres] = useState([]);
  const [state, dispatch] = useReducer(filmDataReducer, {
    films: [],
    myList: JSON.parse(localStorage.getItem('myList')) || [],
    isLoading: true,
    modalIsOpen: false,
  });

  useEffect(() => {
    const updatedGenres = getInitialGenreData(netStruckData);
    setFeaturedGenres(updatedGenres);

    dispatch({ type: 'CONTENT_LOADED', id: netStruckData });
  }, []);

  useEffect(
    () => localStorage.setItem('myList', JSON.stringify(state.myList)),
    [state.myList],
  );

  const getFilmsOfSameGenre = category => {
    const filmsOfSameGenre = state.films.filter(film =>
      film.genres.includes(category),
    );
    return filmsOfSameGenre;
  };

  return (
    <NetStruckDataState.Provider
      value={{
        state,
        featuredGenres,
        getFilmsOfSameGenre,
      }}
    >
      <NetStruckDataDispatcher.Provider value={dispatch}>
        {props.children}
      </NetStruckDataDispatcher.Provider>
    </NetStruckDataState.Provider>
  );
};

function useNetStruckDataState() {
  const context = useContext(NetStruckDataState);
  if (context === undefined) {
    throw new Error(
      'useNetStruckDataState must be used within a NetStruckDataProvider',
    );
  }
  return context;
}
function useNetStruckDataDispatcher() {
  const context = useContext(NetStruckDataDispatcher);
  if (context === undefined) {
    throw new Error(
      'useNetStruckDataDispatcher must be used within a NetStruckDataProvider',
    );
  }
  return context;
}

export {
  NetStruckDataProvider,
  useNetStruckDataState,
  useNetStruckDataDispatcher,
};

NetStruckDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
