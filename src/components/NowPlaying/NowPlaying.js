import React, { useEffect } from 'react';
import { useFilmValues } from '../../context';
import Spinner from '../../icons/Spinner';
import Carousel from './Carousel/Carousel';
import ContentRows from './ContentRows/ContentRows';
import OrganizedContent from './ContentRows/OrganizedContent';

export default function NowPlaying() {
  useEffect(() => {
    document.title = 'Now Playing - NetStruck';
  }, []);

  const { state } = useFilmValues();
  const { isLoading } = state;

  return (
    <div className='mb-8 overflow-hidden'>
      <h1 className='sr-only'>NetStruck Featured Content</h1>
      <Carousel />
      <OrganizedContent>
        {isLoading ? (
          <div className='flex justify-center items-center'>
            <Spinner />
          </div>
        ) : (
          <ContentRows />
        )}
      </OrganizedContent>
    </div>
  );
}
