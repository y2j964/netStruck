import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNetStruckDataDispatcher } from '../../context';
import Plus from '../../icons/Plus';
import Minus from '../../icons/Minus';

function ToggleToMyListBtn({ isAddedToMyList, isHovered, slug }) {
  const dispatch = useNetStruckDataDispatcher();
  const toggleFilmMyListState = () => {
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: slug });
  };

  return (
    <button
      className='toggle-to-MyList-btn'
      onClick={toggleFilmMyListState}
      aria-hidden={!isHovered}
      tabIndex={!isHovered ? -1 : 0}
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

export default memo(ToggleToMyListBtn);

ToggleToMyListBtn.propTypes = {
  isAddedToMyList: PropTypes.bool,
  isHovered: PropTypes.bool,
  slug: PropTypes.string,
};
