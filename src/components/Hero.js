import React, { Component } from 'react';
import marienbad from '../marienbad.jpeg';
import laDolceVita from '../laDolceVita.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div className='relative hero'>
        <img
          src={laDolceVita}
          alt='Still from Once Upon a Time in America'
          className='absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover'
        />
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
          <div className='max-w-md text-center'>
            <h2 className='text-white text-3xl font-bold'>
              A Movie Lover's Dream
            </h2>
            <p className='text-white mb-5 leading-tight'>
              Classics and discoveries from around the world, thematically
              programmed with special features, on a streaming service brought
              to you by the Criterion Collection
            </p>
            <a
              href=''
              className='inline-block px-6 py-3 mb-1 bg-gray-100 text-xs'
            >
              SIGN UP
            </a>
            <span className='block text-white text-sm font-bold'>
              14-day free trial
            </span>
          </div>
        </div>
      </div>
    );
  }
}
