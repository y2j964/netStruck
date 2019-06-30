import React, { Component } from 'react';
import NavbarItems from './NavbarItems';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='p-4'>
        <NavbarItems />
      </nav>
    );
  }
}
