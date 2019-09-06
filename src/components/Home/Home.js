import React, { useEffect } from 'react';
import Hero from './Hero';
import SliderContainer from './SliderContainer/SliderContainer';

export default function Home() {
  useEffect(() => {
    document.title = 'NetStruck';
  }, []);

  return (
    <React.Fragment>
      <h1 className='sr-only'>NetStruck Home</h1>
      <Hero />
      <SliderContainer />
    </React.Fragment>
  );
}
