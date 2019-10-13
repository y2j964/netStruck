import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useIsIntersecting from '../utilityFunctions/useIsIntersecting';

export default function IntersectionObserver({ offscreen, onscreen }) {
  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref);

  return <div ref={ref}>{!isIntersecting ? offscreen : onscreen}</div>;
}

IntersectionObserver.propTypes = {
  offscreen: PropTypes.element.isRequired,
  onscreen: PropTypes.element.isRequired,
};
