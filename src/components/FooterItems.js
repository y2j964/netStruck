import React from 'react';
import PropTypes from 'prop-types';

export default function FooterItems({ linkData }) {
  const footerItemFrags = linkData.map((link, index) => (
    <li key={index} className='mr-5'>
      <a href='' className='text-gray-300 text-xs'>
        {link}
      </a>
    </li>
  ));
  return <React.Fragment>{footerItemFrags}</React.Fragment>;
}

FooterItems.propTypes = {
  linkData: PropTypes.array.isRequired,
};
