import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarItem({ isHome, text, slug, handleClick }) {
  if (!isHome) {
    return (
      <li>
        <Link
          to={`/${slug}`}
          className={'navbar__link collapsible-group__item'}
          onClick={handleClick}
        >
          {text}
        </Link>
      </li>
    );
  }
  return (
    <Link to={'/'} className={'navbar__link'} onClick={handleClick}>
      {text}
    </Link>
  );
}

NavbarItem.propTypes = {
  isHome: PropTypes.bool,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
