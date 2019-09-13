import React from 'react';
import { useFilmGetSet } from '../../context';
import Plus from '../../icons/Plus';

export default function SearchFilterTrigger() {
  const { dispatch } = useFilmGetSet();
  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  return (
    <button className='filter-btn' onClick={toggleSearchModal}>
      FILTER
      <Plus svgClassName='icon--positioned-right' width='20' height='20' />
    </button>
  );
}
