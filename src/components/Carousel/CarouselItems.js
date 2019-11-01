import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

export default function CarouselItems({ carouselItems }) {
  const carouselItemFrags = carouselItems.map((entry, index) => {
    const { id, ...presentational } = entry;
    return (
      <CarouselItem
        key={id}
        {...presentational}
        index={index}
        length={carouselItems.length}
      />
    );
  });

  return <React.Fragment>{carouselItemFrags}</React.Fragment>;
}

CarouselItems.propTypes = {
  carouselItems: PropTypes.array.isRequired,
};
