import React from 'react';
import Hero from './Hero';
import theConversation from '../images/theConversation.jpg';
import Play from '../icons/Play';
import Eye from '../icons/Eye';
import Mobile from '../icons/Mobile';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='carousel-primary pt-4 border-b border-gray-700'>
        <ul className='flex justify-center '>
          <li className='carousel-primary__switch carousel-primary__switch--is-active'>
            <button className='w-24 h-sm border-2 border-white mb-3'>
              <Play playWidth='25' playHeight='25' playFill='#fff' />
            </button>
            <span className='text-sm text-center text-white mb-4'>
              The movies you want
            </span>
          </li>
          <li className='carousel-primary__switch border-l border-gray-700'>
            <button className='flex justify-center items-center mb-3'>
              <Eye />
            </button>
            <span className='text-sm text-center text-white mb-4'>
              Thematically presented
            </span>
          </li>
          <li className='carousel-primary__switch border-l border-gray-700'>
            <button className='mb-3'>
              <Mobile />
            </button>
            <span className='text-sm text-center text-white mb-4'>
              Download the apps
            </span>
          </li>
        </ul>
      </div>
      <div className='relative hero'>
        <img
          src={theConversation}
          alt='Gene Hackman surrounded by audio equipment in the film, The Conversation'
          className='absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover'
        />
      </div>
    </div>
  );
}
