import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import { filmDataType } from './types';

export default function CarouselItems({ featuredFilms }) {
  const carouselItemFrags = featuredFilms.map((entry, index) => {
    const { id, ...otherProps } = entry;
    return (
      <CarouselItem
        key={id}
        {...otherProps}
        index={index}
        length={featuredFilms.length}
      />
    );
  });

  return <React.Fragment>{carouselItemFrags}</React.Fragment>;
}

CarouselItems.propTypes = {
  featuredFilms: PropTypes.arrayOf(filmDataType).isRequired,
};
