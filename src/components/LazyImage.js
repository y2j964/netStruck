import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useIsIntersecting from '../utilityFunctions/useIsIntersecting';

export default function LazyImage({ img, alt }) {
  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref);

  return <img ref={ref} src={isIntersecting ? img : ''} alt={alt} />;
}

LazyImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
