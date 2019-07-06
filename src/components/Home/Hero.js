import React, { Component } from 'react';
import onceUponATimeInAmerica2 from '../../images/onceUponATimeInAmerica2.jpg';

export default class Hero extends Component {
  render() {
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
              A Movie Lover's Dream
            </h2>
            <p className='text-white mb-5 leading-tight'>
              Classics and discoveries from around the world, thematically
              programmed with special features, on a streaming service brought
              to you by the Criterion Collection
            </p>
            <a href='' className='link-btn'>
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
