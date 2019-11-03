import React from 'react';
import uuid from 'uuid';
import FooterItem from './FooterItem';

const footerItemsData = [
  {
    text: 'THE CRITERION COLLECTION',
    href: 'https://www.criterion.com/',
    id: uuid.v4(),
  },
  {
    text: 'CRITERION CHANNEL',
    href: 'https://www.criterionchannel.com/',
    id: uuid.v4(),
  },
  {
    text: 'NETFLIX',
    href: 'https://www.netflix.com/',
    id: uuid.v4(),
  },
];

export default function FooterItems() {
  const footerItemFrags = footerItemsData.map(link => {
    const { id, ...otherProps } = link;
    return <FooterItem key={id} {...otherProps} />;
  });
  return <React.Fragment>{footerItemFrags}</React.Fragment>;
}
