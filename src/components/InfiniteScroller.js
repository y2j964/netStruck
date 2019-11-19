import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultOptions = {
  root: null,
  rootMargin: '0px 0px 200px 0px',
  threshold: 1.0,
};

export default function InfiniteScroller({
  intersectionObserverOptions = defaultOptions,
  children,
  loadMore,
  isTable = false,
}) {
  const ref = useRef();
  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        loadMore();
        observer.disconnect(refCurrent);
      }
    }, intersectionObserverOptions);

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      observer.unobserve(refCurrent);
    };
  }, [ref, loadMore, intersectionObserverOptions]);

  return (
    <React.Fragment>
      {children}
      {!isTable ? (
        <div aria-hidden="true" ref={ref}></div>
      ) : (
        <tr aria-hidden="true" ref={ref}></tr>
      )}
    </React.Fragment>
  );
}

InfiniteScroller.propTypes = {
  intersectionObserverOptions: PropTypes.shape({
    root: PropTypes.element,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired,
  isTable: PropTypes.bool,
};
