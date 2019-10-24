import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import NavbarPrimaryItem from './NavbarPrimaryItem';

const navbarPrimaryItemsData = [
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

export default function NavbarPrimaryItems({ collapsibleNavIsExpanded }) {
  const navbarPrimaryItemsFrags = navbarPrimaryItemsData.map(item => {
    return (
      <NavbarPrimaryItem key={item.id} slug={item.slug}>
        {item.text}
      </NavbarPrimaryItem>
    );
  });

  return (
    <ul
      className={`collapsible-group${
        collapsibleNavIsExpanded ? ' collapsible-group--is-expanded' : ''
      }`}
      id='navbarCollapsibleGroup'
    >
      {navbarPrimaryItemsFrags}
    </ul>
  );
}

NavbarPrimaryItems.propTypes = {
  collapsibleNavIsExpanded: PropTypes.bool.isRequired,
};
