import React from 'react';
import PropTypes from 'prop-types';
import CarouselCoin from './CarouselCoin';
import { filmDataType } from './types';

export default function CarouselCoins({ featuredFilms, jumpToSlide }) {
  const carouselCoinFrags = featuredFilms.map((entry, index) => (
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
  featuredFilms: PropTypes.arrayOf(filmDataType).isRequired,
  jumpToSlide: PropTypes.func.isRequired,
};
