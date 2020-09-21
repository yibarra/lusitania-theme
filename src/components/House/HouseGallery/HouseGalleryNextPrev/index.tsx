import React, { FunctionComponent, memo, useCallback } from 'react';

import HouseGalleryNextPrevItem from './HouseGalleryNextPrevItem';

import { IHouseGalleryNextPrev } from './interfaces';

import './house-gallery-next-prev.scss';

// house next prev
const HouseGalleryNextPrev: FunctionComponent<IHouseGalleryNextPrev> = ({ current, items }) => {
  // next
  const next = useCallback((current: number, index: number) => {
    if ((current + 1) > (items.length - 1)) {
      return 0 === index;
    } else {
      return (current + 1) === index;
    }
  }, [ items ]);

  // prev
  const prev = useCallback((current: number, index: number) => {
    if ((current - 1) < 0) {
      return (items.length - 1) === index;
    } else {
      return (current - 1) === index;
    }
  }, [ items ]);

  // render
  return (
    <div className="house--gallery--next--prev">
      {items && items.map((item: any, index: number) => 
        <HouseGalleryNextPrevItem
          current={next(current, index)}
          last={prev(current, index)}
          index={index}
          key={index}>{item}</HouseGalleryNextPrevItem>)}
    </div>
  );
};

export default memo(HouseGalleryNextPrev);