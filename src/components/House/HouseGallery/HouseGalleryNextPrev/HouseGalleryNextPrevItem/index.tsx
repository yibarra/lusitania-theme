import React, { FunctionComponent, useCallback, useEffect, useState, memo } from 'react';

import { IHouseGalleryNextPrevItem } from './interfaces';

import './house-gallery-next-prev-item.scss';

// house next prev item
const HouseGalleryNextPrevItem: FunctionComponent<IHouseGalleryNextPrevItem> = ({ current, last, children }) => {
  const [ animation, setAnimation ] = useState({ animationFinished: false });

  // on animation start
  const onAnimationStart = useCallback(() => {
    setAnimation({ animationFinished: false });
  }, [ setAnimation ]);

  // on animation finished
  const onAnimationEnd = useCallback(() => {
    setAnimation({ animationFinished: true });
  }, [ setAnimation ]);

  // use effect
  useEffect(() => {
    onAnimationStart();
  }, [ current, onAnimationStart ]);

  // render
  return (
    <div
      className="house--gallery--next--prev--item"
      data-finish={animation.animationFinished}
      data-current={current}
      data-last={last}
      onAnimationEnd={onAnimationEnd}
      onAnimationStart={onAnimationStart}>
      {children}
    </div>
  );
};

export default memo(HouseGalleryNextPrevItem);