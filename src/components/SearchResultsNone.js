import React from 'react';

export default function SearchResultsNone() {
  return (
    <div className='search-filter__results'>
      <p className='light-gray text-center font-bold'>
        Can't find anything matching those terms. Try something else.
      </p>
    </div>
  );
}
