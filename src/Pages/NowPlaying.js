import React, { useEffect, useRef } from 'react';
import { useNetStruckDataState } from '../NetStruckDataContext';
import Spinner from '../icons/Spinner';
import Carousel from '../components/Carousel/Carousel';
import ContentRows from '../components/ContentRows/ContentRows';

export default function NowPlaying() {
  const ref = useRef();

  useEffect(() => {
    document.title = 'Now Playing - NetStruck';
    // focus h1 on route change to let screen reader know we changed route
    ref.current.focus();
  }, []);

  const { state } = useNetStruckDataState();
  const { isLoading } = state;

  return (
    <main className="pb-8">
      {/* important to use pb instead of mb to get consistent results from InfiniteScroller */}
      <h1 className="sr-only" tabIndex="-1" ref={ref}>
        NetStruck Featured Content
      </h1>
      <Carousel />
      <section>
        <h2 className="sr-only">Organized Content</h2>
        {isLoading ? <Spinner /> : <ContentRows />}
      </section>
    </main>
  );
}
