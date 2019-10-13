import React, { useEffect } from 'react';
import { useNetStruckDataState } from '../context';
import Spinner from '../icons/Spinner';
import Carousel from '../components/Carousel/Carousel';
import ContentRows from '../components/ContentRows/ContentRows';

export default function NowPlaying() {
  useEffect(() => {
    document.title = 'Now Playing - NetStruck';
  }, []);

  const { state } = useNetStruckDataState();
  const { isLoading } = state;

  return (
    <main className='pb-8 overflow-hidden'>
      {/* important to use pb instead of mb to get consistent results from InfiniteScroller */}
      <h1 className='sr-only'>NetStruck Featured Content</h1>
      <Carousel />
      <section>
        <h2 className='sr-only'>Organized Content</h2>
        {isLoading ? (
          <div className='flex justify-center items-center'>
            <Spinner />
          </div>
        ) : (
          <ContentRows />
        )}
      </section>
    </main>
  );
}
