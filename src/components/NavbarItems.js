import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilmGetSet } from '../context';
import SearchIcon from '../icons/SearchIcon';
import HamburgerToggle from '../icons/HamburgerToggle';

const homeLink = 'NETSTRUCK';
const links = ['NOW PLAYING', 'ALL FILMS', 'MY LIST'];

export default function NavbarItems() {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false,
  );

  const { dispatch } = useFilmGetSet();

  const toggleCollapsibleNav = () =>
    setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded);

  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });
  // document.querySelector('html').classList.toggle('scroll-lock');

  const linksData = links.map((link, index) => {
    return (
      <li key={index}>
        <Link
          to={`/${link.toLowerCase().replace(' ', '-')}`}
          className='navbar__link collapsible-group__item'
        >
          {link}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <Link to={'/'} className='navbar__link'>
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
        className={`collapsible-group${
          collapsibleNavIsExpanded ? ' collapsible-group--is-expanded' : ''
        }`}
        id='navbarCollapsibleGroup'
      >
        {linksData}
      </ul>
      <button
        className='hidden md:block ml-auto'
        aria-label='search for film'
        onClick={toggleSearchModal}
      >
        <SearchIcon fill='#fff' />
      </button>
    </React.Fragment>
  );
}
