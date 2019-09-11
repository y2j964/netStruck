import React from 'react';
import { Link } from 'react-router-dom';
import onceUponATimeInAmerica2 from '../../images/onceUponATimeInAmerica2.jpg';

export default function Hero() {
  return (
    <div className='relative hero'>
      <img
        src={onceUponATimeInAmerica2}
        alt='kids skipping in between buildings that frame the Williamsburg Bridge in the film, Once Upon a Time in America'
        className='absolutely-covered'
      />
      <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
        <div className='max-w-md text-center'>
          <h2 className='text-white text-3xl font-bold'>
            A Film Lover's Fantasy
          </h2>
          <p className='text-white mb-5 leading-tight'>
            Classics and discoveries from around the world, thematically
            programmed with special features, on a streaming service brought to
            you by the Criterion Collection
          </p>
          <Link to={'/signup'} className='btn-primary btn-primary--wider mb-1'>
            SIGN UP
          </Link>
          <span className='block text-white text-sm font-bold'>
            14-day free trial
          </span>
        </div>
      </div>
    </div>
  );
}
