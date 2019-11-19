import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Tabs from '../components/Tabs/Tabs';

export default function Home() {
  useEffect(() => {
    document.title = 'NetStruck';
  }, []);

  return (
    <main>
      <h1 className="sr-only">NetStruck Home</h1>
      <Hero />
      <Tabs />
    </main>
  );
}
