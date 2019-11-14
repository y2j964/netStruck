import React from 'react';
import PropTypes from 'prop-types';
import { useNetStruckDataDispatcher } from '../../NetStruckDataContext';
import Plus from '../../icons/Plus';
import Minus from '../../icons/Minus';

export default function ToggleToMyListBtn({ isAddedToMyList, slug }) {
  const dispatch = useNetStruckDataDispatcher();
  const toggleFilmMyListState = () =>
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: slug });

  return (
    <button
      className='toggle-to-MyList-btn'
      onClick={toggleFilmMyListState}
      aria-label={isAddedToMyList ? 'Remove from My List' : 'Add to My List'}
    >
      {isAddedToMyList ? (
        <Minus width='13' height='13' additionalClasses='rotate-transition' />
      ) : (
        <Plus width='13' height='13' additionalClasses='rotate-transition' />
      )}
      <span className='toggle-to-MyList-btn__text'>My List</span>
    </button>
  );
}

ToggleToMyListBtn.propTypes = {
  isAddedToMyList: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
};
