import React, { FunctionComponent, useCallback, memo, useState } from 'react';
import parse from 'html-react-parser';

import HouseInfo from './HouseInfo';
import HouseGallery from './HouseGallery';

import { IHouse } from './interfaces';

import './house.scss';

// house
const House: FunctionComponent<IHouse> = ({ item }) => {
  // state
  const [ active, setActive ]: any = useState(false);

  // filter images
  const filterImages = useCallback((items: any[]) => {
    if (!Array.isArray(items)) return [];

    const result: any [] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item instanceof Object) {
        console.log(item);
        result.push(item);
      }
    }

    return result;
  }, []);

  // images
  const images: any = parse(item.content.rendered, {
    replace: ({ attribs, name, children }) => {
      if (!attribs) return null;

      if (attribs && attribs.class === 'wp-block-image')
        return children;
    }
  });

  // render
  return (
    <div className="house" data-active={active}>
      {item.content &&
        <>
          <HouseGallery active={active} item={item} items={filterImages(images)} />
          <HouseInfo active={active} item={item} setActive={setActive} />
        </>}
    </div>
  );
};

export default memo(House);