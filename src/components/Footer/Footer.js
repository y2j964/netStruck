import React from 'react';
import FooterItems from './FooterItems';

export default function Footer() {
  return (
    <footer className="p-4">
      <ul className="flex justify-center sm:justify-start flex-wrap">
        <FooterItems />
      </ul>
    </footer>
  );
}
