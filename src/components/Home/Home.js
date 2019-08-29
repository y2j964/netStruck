import React from 'react';
import Hero from './Hero';
import SliderContainer from './SliderContainer/SliderContainer';

export default function Home() {
  return (
    <React.Fragment>
      <h1 className='sr-only'>NetStruck Home</h1>
      <Hero />
      <SliderContainer />
    </React.Fragment>
  );
}
