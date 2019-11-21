import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero/Hero';
import Tabs from '../components/Tabs/Tabs';

export default function Home() {
  const ref = useRef();

  useEffect(() => {
    document.title = 'NetStruck';
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, []);

  return (
    <main>
      <h1 className="sr-only" tabIndex="-1" ref={ref}>
        NetStruck Home
      </h1>
      <Hero />
      <Tabs />
    </main>
  );
}
