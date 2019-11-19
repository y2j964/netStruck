const getInitialFilmData = (dataSource, myListSlugs) => {
  let updatedFilms = [];
  dataSource.films.forEach(film => {
    const filmObj = { ...film };
    // if that film was saved to MyList in localStorage, reflect accurate isAddedToMyList value
    if (myListSlugs.includes(filmObj.slug)) {
      filmObj.isAddedToMyList = true;
    }
    updatedFilms = [...updatedFilms, filmObj];
  });
  return updatedFilms;
};

const getUpdatedMyList = (dataSource, film) => {
  if (film.isAddedToMyList) {
    const updatedMyList = dataSource.concat(film);
    return updatedMyList;
  }
  const updatedMyList = dataSource.filter(item => item.slug !== film.slug);
  return updatedMyList;
};

const filmDataReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILM_MYLIST_STATE': {
      const updatedFilms = [...state.films];
      const targetedFilm = updatedFilms.find(film => film.slug === action.id);

      // updated isAddedToMyList bool
      // will mutate updatedFilms (which we want--note that we aren't mutating state directly)
      // b/c objects are nested in array
      targetedFilm.isAddedToMyList = !targetedFilm.isAddedToMyList;

      // update MyList array
      const updatedMyList = getUpdatedMyList(state.myList, targetedFilm);

      return { ...state, films: updatedFilms, myList: updatedMyList };
    }

    case 'OPEN_MODAL':
      return { ...state, modalIsOpen: true };

    case 'CLOSE_MODAL':
      return { ...state, modalIsOpen: false };

    case 'CONTENT_LOADED': {
      const myListSlugs = state.myList.map(film => film.slug);
      const updatedFilms = getInitialFilmData(action.id, myListSlugs);
      return {
        ...state,
        films: updatedFilms,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default filmDataReducer;
