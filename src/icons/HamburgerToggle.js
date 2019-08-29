import React from 'react';

export default function HamburgerToggle({ additionalClasses }) {
  return (
    <svg
      viewBox='0 0 20 20'
      width='20'
      height='20'
      fill='white'
      aria-hidden='true'
      className={additionalClasses}
    >
      <path d='M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z'></path>
    </svg>
  );
}
