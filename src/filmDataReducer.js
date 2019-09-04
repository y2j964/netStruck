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

    case 'UPDATE_SLIDER_VISIBILITY':
      // console.log(action.id);
      return state;
    // return state.map(film => {
    //   if (film.id === action.id) {
    //     return { ...film, isVisibleToSlider: true };
    //   }
    //   return film;
    // });

    case 'TOGGLE_MODAL':
      document.querySelector('html').classList.toggle('overflow-hidden');
      return { ...state, modalIsOpen: !state.modalIsOpen };

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

export default filmDataReducer;
