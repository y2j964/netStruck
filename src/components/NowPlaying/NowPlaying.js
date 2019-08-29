import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import ContentRows from './ContentRows/ContentRows';
import OrganizedContent from './ContentRows/OrganizedContent';

export default class NowPlaying extends Component {
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
    return (
      <div className='mb-8 overflow-hidden'>
        <h1 className='sr-only'>NetStruck Featured Content</h1>
        <Carousel />
        <OrganizedContent>
        <ContentRows />
        </OrganizedContent>
      </div>
    );
  }
}
