import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useFilmGetSet } from '../../context';
import Plus from '../../icons/Plus';
import Minus from '../../icons/Minus';

function ToggleToMyListBtn({ isAddedToMyList, isHovered, id }) {
  const { dispatch } = useFilmGetSet();
  const toggleFilmMyListState = () =>
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });

  const addToMyList = () => {
    toggleFilmMyListState();
  };

  if (isAddedToMyList) {
    return (
      <button
        className='toggle-to-MyList-btn'
        onClick={addToMyList}
        aria-hidden={!isHovered}
        tabIndex={!isHovered ? -1 : 0}
        aria-label='Remove from MyList'
      >
        <React.Fragment>
          <Minus width='10' height='10' />
          <span className='text-xs text-white ml-35'>My List</span>
        </React.Fragment>
      </button>
    );
  }

  if (!isAddedToMyList) {
    return (
      <button
        className='toggle-to-MyList-btn'
        onClick={addToMyList}
        aria-hidden={!isHovered}
        tabIndex={!isHovered ? -1 : 0}
        aria-label='Add To MyList'
      >
        <React.Fragment>
          <Plus width='10' height='10' svgClassName='rotate-transition' />
          <span className='text-xs text-white ml-35'>My List</span>
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
  id: PropTypes.string.isRequired,
};

// import React, { useState, useEffect, memo } from 'react';
// import PropTypes from 'prop-types';
// import { useFilmGetSet } from '../../context';
// import Plus from '../../icons/Plus';
// import Minus from '../../icons/Minus';

// function ToggleToMyListBtn({ tileIsHovered, isAddedToMyList, id }) {
//   const [isLoading, setIsLoading] = useState(false);

//   const { dispatch } = useFilmGetSet();
//   const toggleFilmMyListState = () =>
//     dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id });

//   const addToMyList = () => {
//     setIsLoading(true);
//     toggleFilmMyListState();
//   };

//   useEffect(() => {
//     setIsLoading(false);
//   }, [isAddedToMyList]);

//   if (tileIsHovered && isAddedToMyList) {
//     return (
//       <button
//         className='toggle-to-MyList-btn'
//         onClick={addToMyList}
//         aria-label='Remove from MyList'
//       >
//         <Minus />
//         <div className='tooltip'>
//           <span className='text-xs'>
//             {isLoading ? 'Adding . . .' : 'Remove from MyList'}
//           </span>
//         </div>
//       </button>
//     );
//   }

//   if (tileIsHovered && !isAddedToMyList) {
//     return (
//       <button
//         className='toggle-to-MyList-btn'
//         onClick={addToMyList}
//         aria-label='Add To MyList'
//       >
//         <Plus />
//         <div className='tooltip'>
//           <span className='text-xs'>
//             {isLoading ? 'Removing . . .' : 'Add to MyList'}
//           </span>
//         </div>
//       </button>
//     );
//   }

//   return null;
// }

// export default memo(ToggleToMyListBtn);

// ToggleToMyListBtn.propTypes = {
//   tileIsHovered: PropTypes.bool.isRequired,
//   isAddedToMyList: PropTypes.bool.isRequired,
//   id: PropTypes.string.isRequired,
// };
