import React from 'react';
import SearchIcon from '../icons/SearchIcon';

export default function SearchForm() {
  return (
    <form role='search' className='flex mt-8 width-85 mx-auto'>
      <span className='pr-4 pb-2 mr-5 border-r border-modal-grey'>
        <SearchIcon searchIconWidth='35' searchIconHeight='35' fill='#bebebb' />
      </span>
      <input
        type='search'
        role='searchbox'
        placeholder='Search NetStruck'
        aria-label='enter search terms'
        className='modal-grey text-2xl flex-1 bg-transparent pb-2 input--no-ring placeholder-color'
      />
    </form>
  );
}
