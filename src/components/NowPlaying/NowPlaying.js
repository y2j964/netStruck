import React, { Component } from 'react';
import Row from './Row';
import Carousel from './Carousel/Carousel';
// import filmDataJson from '../../filmData.json';
import filmData from '../../filmData';

export default class NowPlaying extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IGuessThisIsGrowingUp: filmData.IGuessThisIsGrowingUp,
    };
  }

  // componentDidMount() {
  //   // const filmData = JSON.parse(filmDataJson);
  //   this.setState({
  //     IGuessThisIsGrowingUpData: filmData.IGuessThisIsGrowingUp,
  //   });

  // axios
  //   .get(filmData)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));
  // }

  render() {
    console.log(this.state.IGuessThisIsGrowingUp);
    return (
      <div className='mb-8 overflow-hidden'>
        <Carousel />
        <Row heading='JCM Favorites' />
        <Row
          category={this.state.IGuessThisIsGrowingUp}
          heading='I Guess This is Growing Up'
        />
      </div>
    );
  }
}
