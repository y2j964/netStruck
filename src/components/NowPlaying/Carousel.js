import React from 'react';
import PlayIcon from '../../icons/Play';
import ChevronLeft from '../../icons/ChevronLeft';
import ChevronRight from '../../icons/ChevronRight';
import thereWillBeBlood from '../../images/thereWillBeBlood.jpg';
import masculinFeminin from '../../images/masculinFeminin.jpg';

export default function Carousel() {
  return (
    <div className='carousel-secondary mb-4'>
      <div className='absolute top-0 bottom-0 left-0 right-0 '>
        <div className='absolute pl-6 left-0 bottom-10 z-10'>
          <h2 className='text-white text-3xl font-semibold'>Noir</h2>
          <p className='text-gray-400 mb-4 text-sm'>
            a description for noir films
          </p>
          <button className='px-4 py-2 bg-gray-100'>
            <PlayIcon />
            Watch Now
          </button>
        </div>
      </div>
      <div className='absolute top-0 bottom-0 right-0 flex'>
        <img src={thereWillBeBlood} alt='' className='lg:max-w-4xl' />
      </div>
      <div className='absolute left-0 bottom-0 w-full h-10 z-20'>
        <ul className='flex justify-center'>
          <li className='mr-1'>
            <button className='carousel-secondary__radio bg-gray-100 h-2 w-2 rounded shadow opacity-0'></button>
          </li>
          <li className='mr-1'>
            <button className='carousel-secondary__radio bg-gray-100 h-2 w-2 rounded shadow opacity-0'></button>
          </li>
          <li className='mr-1'>
            <button className='carousel-secondary__radio bg-gray-100 h-2 w-2 rounded shadow opacity-0'></button>
          </li>
          <li className='mr-1'>
            <button className='carousel-secondary__radio bg-gray-100 h-2 w-2 rounded shadow opacity-0'></button>
          </li>
          <li className='mr-1'>
            <button className='carousel-secondary__radio bg-gray-100 h-2 w-2 rounded shadow opacity-0'></button>
          </li>
        </ul>
      </div>
      <div className='absolute top-0 bottom-0 left-0 flex items-center px-3'>
        <button className='chevron-arrow'>
          <ChevronLeft />
        </button>
      </div>
      <div className='absolute top-0 bottom-0 right-0 flex items-center px-3'>
        <button className='chevron-arrow'>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
