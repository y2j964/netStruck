import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../icons/SearchIcon';

const homeLink = 'NETSTRUCK';
const links = ['NOW PLAYING', 'ALL FILMS', 'MY LIST'];

export default function NavbarItems() {
  const linksData = links.map((link, index) => {
    return (
      <li key={index} className='mr-8'>
        <Link
          to={`/${link.toLowerCase().replace(' ', '-')}`}
          className='text-white'
        >
          {link}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <Link to={'/'} className='text-white mr-8'>
        {homeLink}
      </Link>
      <ul className='flex items-center'>{linksData}</ul>
      <button className='ml-auto' aria-label='search for film'>
        <SearchIcon fill='#fff'/>
      </button>
    </React.Fragment>
  );
}
