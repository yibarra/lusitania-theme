import React, { FunctionComponent, memo } from 'react';
import { animated as a } from 'react-spring';

import { IHouseGalleryItem } from './interfaces';

import './house-gallery-item.scss';

// house gallery item
const HouseGalleryItem: FunctionComponent<IHouseGalleryItem> = ({ display, drag, i, x, items }) => {
  // render
  return (
    <a.div
      {...drag()}
      className="house--gallery--item"
      key={i}
      style={{ display, transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
        <a.div>{items[i]}</a.div>
    </a.div>
  );
};

export default memo(HouseGalleryItem);