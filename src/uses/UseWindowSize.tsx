import { useCallback, useEffect, useState } from 'react';

// use WindowSize
function useWindowSize() {
  // get size
  const getSize: any = useCallback(() => {
    const isClient = typeof window === 'object';

    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, []);

  // window size
  const [ windowSize, setWindowSize ] = useState(getSize);

  // use effect
  useEffect(() => {    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => 
      window.removeEventListener('resize', handleResize);
  }, [ getSize ]);

  return windowSize;
};

export default useWindowSize;