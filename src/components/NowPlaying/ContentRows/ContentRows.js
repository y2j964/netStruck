import React, { Component } from 'react';
import uuid from 'uuid';
import ContentRow from './ContentRow';
import filmData from '../../../filmData';

// const MyContext = React.createContext();

// export class FilmDataProvider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       filmGroups: filmData,
//     };
//   }

//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           state: this.state,
//           activateTile: () => this.setState({}),
//         }}
//       ></MyContext.Provider>
//     );
//   }
// }

// const genres = [];
// filmData.forEach(film => {
//   if (!genres.includes(film.genre) && !Array.isArray(film.genre)) {
//     genres.push(film.genre);
//     return;
//   }
//   if (Array.isArray(film.genre)) {
//     film.genre.forEach(genre => {
//       if (!genres.includes(genre)) {
//         genres.push(genre);
//       }
//     });
//   }
// });

export default class ContentRows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmGroups: Object.keys(filmData),
    };
  }

  render() {
    // console.log(this.state.filmGroups['DIRECTED BY NOAH BAUMBACH']);
    const rowFrags = this.state.filmGroups.map(filmGroup => (
      <ContentRow category={filmGroup} key={uuid.v4()} />
    ));
    return <React.Fragment>{rowFrags}</React.Fragment>;
  }
}
