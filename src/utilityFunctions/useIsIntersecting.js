// a tweaking of Gabe Ragan's hook from https://usehooks.com/useOnScreen/
import { useState, useEffect } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px 0px 200px 0px',
  threshold: 1.0,
};

function useIsIntersecting(ref, options = defaultOptions) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        setIsVisible(true);
        observer.disconnect(refCurrent);
      }
    }, options);

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      observer.unobserve(refCurrent);
    };
  }, [ref, options]);

  return isVisible;
}

export default useIsIntersecting;
