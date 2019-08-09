import React, { Component } from 'react';
import filmData from './filmData';

const FilmDataContext = React.createContext();

class FilmDataProvider extends Component {
  state = {
    filmData: [],
    myList: [],
    modalOpen: false,
  };

  addToMyList = () => console.log('added');

  componentDidMount() {
    this.setFilmData();
  }

  // getGenres = films => {
  //   const genres = [];
  //   films.forEach(film => {
  //     film.genre.forEach(genre => {
  //       if (!genres.includes(genre)) {
  //         genres.push(genre);
  //       }
  //     });
  //   });
  //   return genres;
  // };

  // setGenreData = () => {
  //   const genres = this.getGenres();
  //   this.setState({ filmGenres: genres });
  // };

  setFilmData = () => {
    let updatedFilms = [];
    filmData.forEach(film => {
      const singleItem = { ...film };
      updatedFilms = [...updatedFilms, singleItem];
    });

    // this.setGenreData();
    this.setState({ filmData: updatedFilms });
  };

  render() {
    return (
      <FilmDataContext.Provider
        value={{
          ...this.state,
          addToMyList: this.addToMyList,
        }}
      >
        {this.props.children}
      </FilmDataContext.Provider>
    );
  }
}

const FilmDataConsumer = FilmDataContext.Consumer;

export { FilmDataProvider, FilmDataConsumer };
