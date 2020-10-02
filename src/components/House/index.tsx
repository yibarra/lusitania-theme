import React, { FunctionComponent, memo, useState } from 'react';
import parse from 'html-react-parser';

import UseFilterImage from '../../uses/UseFilterImage';

import HouseInfo from './HouseInfo';
import HouseGallery from './HouseGallery';

import { IHouse } from './interfaces';

import './house.scss';

// house
const House: FunctionComponent<IHouse> = ({ item }) => {
  // state
  const [ active, setActive ]: any = useState(false);
  // uses
  const { filterImages } = UseFilterImage();

  // images
  const images: any = parse(item.content.rendered, {
    replace: ({ attribs, name, children }: any) => {
      if (!attribs) return null;

      if (attribs && (attribs.class === 'wp-block-gallery' || attribs.class === 'wp-block-image')) {
        return children;
      }
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