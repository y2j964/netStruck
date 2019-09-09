import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilmGetSet } from '../../context';
import SearchIcon from '../../icons/SearchIcon';
import HamburgerToggle from '../../icons/HamburgerToggle';

const homeLink = 'NETSTRUCK';
const links = ['NOW PLAYING', 'ALL FILMS', 'MY LIST'];

export default function NavbarItems() {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false,
  );

  const { dispatch } = useFilmGetSet();

  const toggleCollapsibleNav = () =>
    setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded);

  // when collapsible nav is open and a link is clicked, close the nav for new Route
  const ensureCollapsibleNavIsClosed = () => setCollapsibleNavIsExpanded(false);

  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  const linksData = links.map((link, index) => {
    return (
      <li key={index}>
        <Link
          to={`/${link.toLowerCase().replace(' ', '-')}`}
          className='navbar__link collapsible-group__item'
          onClick={ensureCollapsibleNavIsClosed}
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
        className='navbar__link'
        onClick={ensureCollapsibleNavIsClosed}
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
        className={`collapsible-group${
          collapsibleNavIsExpanded ? ' collapsible-group--is-expanded' : ''
        }`}
        id='navbarCollapsibleGroup'
      >
        {linksData}
      </ul>
      <div className='ml-auto hidden md:flex'>
        <Link
          to={'/signup'}
          className='text-white mr-5 font-semibold block'
          onClick={ensureCollapsibleNavIsClosed}
        >
          SIGN UP
        </Link>
        <button
          className=''
          aria-label='search for film'
          onClick={toggleSearchModal}
        >
          <SearchIcon fill='#fff' />
        </button>
      </div>
    </React.Fragment>
  );
}
