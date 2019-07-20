import React from 'react';
import PropTypes from 'prop-types';
import CarouselCoin from './CarouselCoin';

export default function CarouselCoins({ films, jumpToSlide }) {
  const carouselCoinFrags = films.map((entry, index) => (
    <CarouselCoin
      key={entry.id}
      count={index + 1}
      targetId={entry.id}
      targetIsActive={entry.isActive}
      jumpToSlide={jumpToSlide}
    />
  ));
  return <ol className='flex justify-center'>{carouselCoinFrags}</ol>;
}

CarouselCoins.propTypes = {
  films: PropTypes.array.isRequired,
  jumpToSlide: PropTypes.func.isRequired,
};
