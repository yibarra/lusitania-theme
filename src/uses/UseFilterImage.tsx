import { useCallback } from 'react';

// Hook
function UseFilterImage () {
  // filter images
  const filterImages = useCallback((items: any[]) => {
    if (!Array.isArray(items)) return [];

    const result: any [] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item instanceof Object) {
        const { props: { className, children }} = item;

        if (className.includes('wp-block-gallery') && result.length <= 0) {
          result.push(children.props.children[0]);
        }

        if (className.includes('wp-block-image') && result.length <= 0) {
          result.push(item);
        }
      };
    }

    return result;
  }, []);

  // filter images multi
  const filterImagesMulti = useCallback((items: any[]) => {
    if (!Array.isArray(items)) return [];

    const result: any [] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item instanceof Object) {
        const { props: { className, children }} = item;

        if (className.includes('wp-block-gallery')) {
          const nodes = children.props.children;

          for (let key in nodes) {
            const node = nodes[key];

            if (node instanceof Object) {
              result.push(node.props.children);
            }
          }
        }

        if (className.includes('wp-block-image')) {
          result.push(item);
        }
      };
    }

    return result;
  }, []);

  return { filterImages, filterImagesMulti };
}

export default UseFilterImage;