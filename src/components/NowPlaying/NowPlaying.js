import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import ContentRows from './ContentRows/ContentRows';
import OrganizedContent from './ContentRows/OrganizedContent';

export default function NowPlaying() {
  useEffect(() => {
    document.title = 'Now Playing - NetStruck';
  }, []);

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
