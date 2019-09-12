import uuid from 'uuid';
import React, { useState } from 'react';
import { useFilmGetSet } from '../../context';
import NavbarItem from './NavbarItem';
import ModalTrigger from '../ModalTrigger';
import SignUpTrigger from '../SignUpTrigger';
import HamburgerToggler from '../HamburgerToggler/HamburgerToggler';

const homeLink = 'NETSTRUCK';
const collapsibleGroupLinks = ['NOW PLAYING', 'ALL FILMS', 'MY LIST'];

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

  const collapsibleGroupLinksFrags = collapsibleGroupLinks.map(link => {
    return (
      <NavbarItem
        key={uuid.v4()}
        linkTitle={link}
        handleClick={ensureCollapsibleNavIsClosed}
      />
    );
  });

  return (
    <React.Fragment>
      <NavbarItem
        isHome={true}
        linkTitle={homeLink}
        handleClick={ensureCollapsibleNavIsClosed}
      />
      <HamburgerToggler
        controls='navbarCollapsibleGroup'
        collapsibleNavIsExpanded={collapsibleNavIsExpanded}
        handleClick={toggleCollapsibleNav}
      />
      <ul
        className={`collapsible-group${
          collapsibleNavIsExpanded ? ' collapsible-group--is-expanded' : ''
        }`}
        id='navbarCollapsibleGroup'
      >
        {collapsibleGroupLinksFrags}
      </ul>
      <div className='ml-auto hidden md:flex'>
        <SignUpTrigger handleClick={ensureCollapsibleNavIsClosed} />
        <ModalTrigger handleClick={toggleSearchModal} />
      </div>
    </React.Fragment>
  );
}
