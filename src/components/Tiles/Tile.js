import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleToMyListBtn from '../ToggleToMyListBtn/ToggleToMyListBtn';

const Tile = ({
  title,
  year,
  id,
  ariaLabel,
  slug,
  index,
  img,
  isAddedToMyList,
  visibleSlideIndexes,
  // isLeftMostSlide,
  // isRightMostSlide,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`tile-group__item${
        visibleSlideIndexes.includes(index)
          ? ' tile-group__item--is-active'
          : ''
      } ${
        index === visibleSlideIndexes[0]
          ? ' tile-group__item--is-leftmost-active'
          : ''
      } ${
        index === visibleSlideIndexes[visibleSlideIndexes.length - 1]
          ? ' tile-group__item--is-rightmost-active'
          : ''
      } ${
        index === visibleSlideIndexes[0] - 1
          ? ' tile-group__item--is-left-preview'
          : ''
      } ${
        index === visibleSlideIndexes[visibleSlideIndexes.length - 1] + 1
          ? ' tile-group__item--is-right-preview'
          : ''
      }
      tile`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // eslint-disable-next-line no-unneeded-ternary
      aria-hidden={visibleSlideIndexes.includes(index) ? false : true}
      aria-label={ariaLabel}
    >
      {/* <p>{title}</p> */}
      <div className='ratio-16-9 ratio-16-9--overflowed'>
        <img src={img} alt='' />
        <Link
          to={`/now-playing/${slug}`}
          className='absolute top-0 bottom-0 left-0 right-0 z-10'
          tabIndex={`${visibleSlideIndexes.includes(index) ? '0' : '-1'}`}
          aria-label={title}
        />
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-overlay'>
          <h3 className='tile__title'>{title}</h3>
          <span className='tile__title'>{year}</span>
          <ToggleToMyListBtn
            tileIsHovered={isHovered}
            id={id}
            isAddedToMyList={isAddedToMyList}
          />
        </div>
      </div>
    </li>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  slug: PropTypes.string,
  index: PropTypes.number.isRequired,
  isAddedToMyList: PropTypes.bool.isRequired,
  visibleSlideIndexes: PropTypes.array.isRequired,
  isRightMostSlide: PropTypes.bool.isRequired,
  isLeftMostSlide: PropTypes.bool.isRequired,
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.isAddedToMyList === nextProps.isAddedToMyList;
// }

export default memo(Tile);
