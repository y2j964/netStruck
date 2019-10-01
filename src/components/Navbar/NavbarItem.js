import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarItem({ isHome, text, slug, handleClick }) {
  if (!isHome) {
    return (
      <li>
        <NavLink
          to={`/${slug}`}
          className={'navbar__link collapsible-group__item'}
          activeClassName={'navbar__link--is-active'}
          onClick={handleClick}
        >
          {text}
        </NavLink>
      </li>
    );
  }
  return (
    <NavLink
      to={'/'}
      exact
      className={'navbar__link'}
      activeClassName={'navbar__link--is-active'}
      onClick={handleClick}
    >
      {text}
    </NavLink>
  );
}

NavbarItem.propTypes = {
  isHome: PropTypes.bool,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
