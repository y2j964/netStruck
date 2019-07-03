import React from 'react';
import { Link } from 'react-router-dom';
import links from './navbarData';
import SVG from '../icons/SearchIcon';

export default function NavbarItems() {
  const linksData = links.map((link, index) => {
    return (
      <li key={index} className='mr-8'>
        <Link
          to={index === 0 ? '/' : link.toLowerCase().replace(' ', '-')}
          className='text-white'
        >
          {link}
        </Link>
      </li>
    );
  });
  return (
    <ul className='flex items-center'>
      {linksData}
      <li className='ml-auto'>
        <SVG fill='#fff' />
      </li>
    </ul>
  );
}
