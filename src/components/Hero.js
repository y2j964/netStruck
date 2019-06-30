import React, { Component } from 'react';
import marienbad from '../marienbad.jpeg';

export default class Hero extends Component {
  render() {
    return (
      <div className='mb-4'>
        <img
          src={marienbad}
          alt='Still from Last Year at Marienbad'
          className='object-fit w-full h-full'
        />
      </div>
    );
  }
}
