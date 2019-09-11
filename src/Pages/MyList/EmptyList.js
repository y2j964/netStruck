import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyList() {
  return (
    <main className='px-4 mb-10 max-w-6xl mx-auto'>
      <h2 className='text-center text-white text-2xl mb-6'>
        You currently have nothing added to your list.
      </h2>
      <p className='text-white'>
        There are various ways to add films to your list. Most commonly, you can
        hover over a movie, and click the plus sign. Need some guidance? Check
        out our currated selections over at{' '}
        <Link className='underline' to='/now-playing'>
          Now Playing
        </Link>
        .
      </p>
    </main>
  );
}
