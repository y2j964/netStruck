import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useFilmGetSet } from '../../context';
import Plus from '../../icons/Plus';
import Minus from '../../icons/Minus';

function ToggleToMyListBtn({
  isAddedToMyList,
  isHovered,
  slug,
  handleMouseLeave,
}) {
  const { dispatch } = useFilmGetSet();
  const toggleFilmMyListState = () => {
    dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: slug });
  };

  // const removeFilmMyListState = () => {
  //   handleMouseLeave();
  //   dispatch({ type: 'TOGGLE_FILM_MYLIST_STATE', id: slug });
  // };

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
