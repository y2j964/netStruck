import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useFilmGetSet } from '../../../context';
import Plus from '../../../icons/Plus';
import Minus from '../../../icons/Minus';

function ToggleToMyListBtn({ tileIsHovered, isAddedToMyList, id }) {
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useFilmGetSet();
  const toggleFilmMyListState = () =>
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });

  const addToMyList = () => {
    setIsLoading(true);
    toggleFilmMyListState();
  };

  useEffect(() => {
    console.log('remount btn', id);
    setIsLoading(false);
  }, [isAddedToMyList]);

  console.log('render toggle btn');
  if (tileIsHovered && isAddedToMyList) {
    return (
      <button
        className='myList-btn'
        onClick={addToMyList}
        aria-label='Remove from MyList'
      >
        <Minus />
        <div className='tooltip'>
          <span className='text-xs'>
            {isLoading ? 'Removing . . .' : 'Remove from MyList'}
          </span>
        </div>
      </button>
    );
  }

  if (tileIsHovered && !isAddedToMyList) {
    return (
      <button
        className='myList-btn'
        onClick={addToMyList}
        aria-label='Add To MyList'
      >
        <Plus />
        <div className='tooltip'>
          <span className='text-xs'>
            {isLoading ? 'Adding . . .' : 'Add to MyList'}
          </span>
        </div>
      </button>
    );
  }

  return null;
}

export default memo(ToggleToMyListBtn);

ToggleToMyListBtn.propTypes = {
  tileIsHovered: PropTypes.bool.isRequired,
  isAddedToMyList: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
