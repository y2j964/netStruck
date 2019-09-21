import { useEffect, useState } from 'react';
import debounce from './debounce';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth,
  );

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(handleWindowResize));
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
