import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarItem({ isHome, linkTitle, handleClick }) {
  if (!isHome) {
    return (
      <li>
        <Link
          to={`/${linkTitle.toLowerCase().replace(' ', '-')}`}
          className={'navbar__link collapsible-group__item'}
          onClick={handleClick}
        >
          {linkTitle}
        </Link>
      </li>
    );
  }
  return (
    <Link to={'/'} className={'navbar__link'} onClick={handleClick}>
      {linkTitle}
    </Link>
  );
}

NavbarItem.propTypes = {
  isHome: PropTypes.bool,
  linkTitle: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
