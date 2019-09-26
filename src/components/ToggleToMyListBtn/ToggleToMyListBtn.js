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

  if (isAddedToMyList) {
    return (
      <button
        className='toggle-to-MyList-btn'
        onClick={toggleFilmMyListState}
        aria-hidden={!isHovered}
        tabIndex={!isHovered ? -1 : 0}
        aria-label='Remove from MyList'
      >
        <React.Fragment>
          <Minus width='14' height='14' additionalClasses='rotate-transition' />
          <span className='toggle-to-MyList-btn__text'>My List</span>
        </React.Fragment>
      </button>
    );
  }

  if (!isAddedToMyList) {
    return (
      <button
        className='toggle-to-MyList-btn'
        onClick={toggleFilmMyListState}
        aria-hidden={!isHovered}
        tabIndex={!isHovered ? -1 : 0}
        aria-label='Add To MyList'
      >
        <React.Fragment>
          <Plus width='14' height='14' additionalClasses='rotate-transition' />
          <span className='toggle-to-MyList-btn__text'>My List</span>
        </React.Fragment>
      </button>
    );
  }

  return null;
}

export default memo(ToggleToMyListBtn);

ToggleToMyListBtn.propTypes = {
  isAddedToMyList: PropTypes.bool,
  isHovered: PropTypes.bool,
  slug: PropTypes.string,
};
