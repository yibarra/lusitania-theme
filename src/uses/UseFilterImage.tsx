import { useCallback } from 'react';

// Hook
function UseFilterImage () {
  // filter images
  const filterImages = useCallback((items: any[]) => {
    if (!Array.isArray(items)) return [];

    const result: any [] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item instanceof Object) result.push(item);
    }

    return result;
  }, []);

  return { filterImages };
}

export default UseFilterImage;