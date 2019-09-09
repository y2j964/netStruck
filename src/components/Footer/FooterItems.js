import React from 'react';
import PropTypes from 'prop-types';

export default function FooterItems({ linkData }) {
  const footerItemFrags = linkData.map((link, index) => (
    <li key={index} className='mr-5'>
      <a href={link.href} className='text-light-gray text-xs'>
        {link.text}
      </a>
    </li>
  ));
  return <React.Fragment>{footerItemFrags}</React.Fragment>;
}

FooterItems.propTypes = {
  linkData: PropTypes.array.isRequired,
};
