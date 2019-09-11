import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import SliderContainer from '../components/SliderContainer/SliderContainer';

export default function Home() {
  useEffect(() => {
    document.title = 'NetStruck';
  }, []);

  return (
    <main>
      <h1 className='sr-only'>NetStruck Home</h1>
      <Hero />
      <SliderContainer />
    </main>
  );
}
