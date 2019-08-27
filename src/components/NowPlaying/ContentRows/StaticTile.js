import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmDataContext } from '../../../context';
import ToggleToMyListBtn from './ToggleToMyListBtn';

export default function StaticTile({ title, img, slug, id, isAddedToMyList }) {
  const [isHovered, setIsHovered] = useState(false);

  const context = useContext(FilmDataContext);
  const { toggleFilmMyListState } = context;

  const addToMyList = () => {
    toggleFilmMyListState(id);
  };

  const toggleIsHovered = () => {
    console.log('tile hovered');
    return setIsHovered(!isHovered);
  };
  console.log('tile rendered');
  console.log('isHovered ', isHovered);
  return (
    <li
      className='tile tile--is-static'
      onMouseEnter={toggleIsHovered}
      onMouseLeave={toggleIsHovered}
    >
      {/* <p>{title}</p> */}
      <div className='ratio-16-9'>
        <img src={img} alt='' />
        <Link
          to={`/now-playing/${slug}`}
          className='absolute top-0 bottom-0 left-0 right-0'
          aria-label={title}
        ></Link>
        <div className='tile__btn-group'>
          <ToggleToMyListBtn
            addToMyList={addToMyList}
            tileIsHovered={isHovered}
            isAddedToMyList={isAddedToMyList}
          />
        </div>
      </div>
      <h3 className='tile__title'>{title}</h3>
    </li>
  );
}
