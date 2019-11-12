import React from 'react';
import { useNetStruckDataDispatcher } from '../../NetStruckDataContext';
import Plus from '../../icons/Plus';

export default function SearchFilterTrigger() {
  const dispatch = useNetStruckDataDispatcher();
  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });

  return (
    <button className='filter-btn' onClick={toggleSearchModal}>
      FILTER
      <Plus additionalClasses='icon--positioned-right' width='20' height='20' />
    </button>
  );
}
