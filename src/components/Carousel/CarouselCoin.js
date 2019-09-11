import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CarouselCoin = ({ targetIsActive, targetId, count, jumpToSlide }) => {
  return (
    <li className='mr-1'>
      <button
        className={`carousel-coin${
          targetIsActive ? ' carousel-coin--is-active' : ''
        }`}
        id={`carousel-coin-${count}`}
        aria-pressed={targetIsActive}
        aria-controls={`carousel-item-${count}`}
        onClick={jumpToSlide.bind(this, targetId)}
      ></button>
    </li>
  );
};

CarouselCoin.propTypes = {
  targetIsActive: PropTypes.bool.isRequired,
  targetId: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  jumpToSlide: PropTypes.func.isRequired,
};

export default memo(CarouselCoin);
