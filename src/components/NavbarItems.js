import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../icons/SearchIcon';
import HamburgerToggle from '../icons/HamburgerToggle';

const homeLink = 'NETSTRUCK';
const links = ['NOW PLAYING', 'ALL FILMS', 'MY LIST'];

export default function NavbarItems() {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false,
  );

  const toggleCollapsibleNav = () =>
    setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded);

  const linksData = links.map((link, index) => {
    return (
      <li key={index} className='mr-8'>
        <Link
          to={`/${link.toLowerCase().replace(' ', '-')}`}
          className='text-white w-full font-semibold block py-3 md:py-0'
        >
          {link}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <Link
        to={'/'}
        className='text-white md:mr-8 py-3 md:py-0 font-semibold block'
      >
        {homeLink}
      </Link>
      <button
        className='hamburger-toggler'
        onClick={toggleCollapsibleNav}
        aria-label='toggle collapsible navigation menu'
        aria-controls='navbarCollapsibleGroup'
        aria-expanded={collapsibleNavIsExpanded}
      >
        <HamburgerToggle />
      </button>
      <ul
        className={`navbar__collapsible-group${
          collapsibleNavIsExpanded
            ? ' navbar__collapsible-group--is-expanded'
            : ''
        }`}
        id='navbarCollapsibleGroup'
      >
        {linksData}
      </ul>
      <button className='hidden md:block ml-auto' aria-label='search for film'>
        <SearchIcon fill='#fff' />
      </button>
    </React.Fragment>
  );
}
