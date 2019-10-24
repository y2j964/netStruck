import React from 'react';
import SearchGlass from '../icons/SearchGlass';
import { useNetStruckDataDispatcher } from '../context';

export default function ModalTrigger() {
  const dispatch = useNetStruckDataDispatcher();
  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  return (
    <button aria-label='search for film' onClick={toggleSearchModal}>
      <SearchGlass fill='#fff' />
    </button>
  );
}
