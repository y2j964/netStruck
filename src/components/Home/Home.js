import React from 'react';
import Hero from './Hero';
import TabSwitches from './TabSwitches/TabSwitches';
import Slider from './Slider/Slider';

export default function Home() {
  return (
    <div>
      <Hero />
      <TabSwitches />
      <Slider />
    </div>
  );
}
