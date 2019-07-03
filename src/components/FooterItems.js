import React from 'react';

export default function FooterItems(props) {
  const footerItemFrags = props.linkData.map((link, index) => (
    <li key={index} className='mr-5'>
      <a href='' className='text-gray-300 text-xs'>
        {link}
      </a>
    </li>
  ));
  return <React.Fragment>{footerItemFrags}</React.Fragment>;
}
