import React, { useState } from 'react';
import uuid from 'uuid';
import { useNetStruckDataDispatcher } from '../../context';
import NavbarItem from './NavbarItem';
import ModalTrigger from '../ModalTrigger';
import SignUpTrigger from '../SignUpTrigger';
import HamburgerToggle from '../HamburgerToggle/HamburgerToggle';

const homeLink = 'NETSTRUCK';

const collapsibleGroupLinks = [
  {
    text: 'NOW PLAYING',
    slug: 'now-playing',
    id: uuid.v4(),
  },
  {
    text: 'ALL FILMS',
    slug: 'all-films',
    id: uuid.v4(),
  },
  {
    text: 'MY LIST',
    slug: 'my-list',
    id: uuid.v4(),
  },
];

export default function NavbarItems() {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false,
  );

  const dispatch = useNetStruckDataDispatcher();

  const toggleCollapsibleNav = () =>
    setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded);

  // when collapsible nav is open and a link is clicked, close the nav for new Route
  const ensureCollapsibleNavIsClosed = () => setCollapsibleNavIsExpanded(false);

  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  const collapsibleGroupLinksFrags = collapsibleGroupLinks.map(link => {
    return (
      <NavbarItem
        key={uuid.v4()}
        {...link}
        handleClick={ensureCollapsibleNavIsClosed}
      />
    );
  });

  return (
    <React.Fragment>
      <NavbarItem
        isHome={true}
        text={homeLink}
        handleClick={ensureCollapsibleNavIsClosed}
      />
      <HamburgerToggle
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
