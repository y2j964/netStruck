import React from 'react';
import PropTypes from 'prop-types';
import CarouselCoin from './CarouselCoin';

export default function CarouselCoins({ films, jumpToSlide }) {
  const carouselCoinFrags = films.map((entry, index) => (
    <CarouselCoin
      key={entry.id}
      index={index}
      targetId={entry.id}
      targetIsActive={entry.isActive}
      jumpToSlide={jumpToSlide}
    />
  ));
  return (
    <ol
      className='carousel-coin-group'
      role='group'
      aria-label='Choose slide to display'
    >
      {carouselCoinFrags}
    </ol>
  );
}

CarouselCoins.propTypes = {
  films: PropTypes.array.isRequired,
  jumpToSlide: PropTypes.func.isRequired,
};
