import { useEffect, useState } from 'react';
import debounce from './debounce';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    });
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
