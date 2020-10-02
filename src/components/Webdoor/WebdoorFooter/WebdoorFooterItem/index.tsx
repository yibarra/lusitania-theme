import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';

import UseFilterImage from '../../../../uses/UseFilterImage';

import { IWebdoorFooterItem } from './interfaces';

import './webdoor-footer-item.scss';

// webdoor footer item
const WebdoorFooterItem: FunctionComponent<IWebdoorFooterItem> = ({ current, last, index, rendered }) => {
  const [ animation, setAnimation ] = useState({ animationFinished: false });
  const { filterImages } = UseFilterImage();

  // on animation start
  const onAnimationStart = useCallback(() => {
    setAnimation({ animationFinished: false });
  }, [ setAnimation ]);

  // on animation finished
  const onAnimationEnd = useCallback(() => {
    setAnimation({ animationFinished: true });
  }, [ setAnimation ]);

  // images
  const images: any = parse(rendered, {
    replace: ({ attribs, name, children }: any) => {
      if (!attribs) return null;

      if (attribs && (attribs.class === 'wp-block-gallery' || attribs.class === 'wp-block-image')) {
        return children;
      }
    }
  });

  // use effect
  useEffect(() => {
    onAnimationStart();
  }, [ current, onAnimationStart ]);

  // render
  return (
    <div
      className="webdoor--footer--item"
      data-finish={animation.animationFinished}
      data-current={current}
      data-last={last}
      key={index}>
        <div
          className="images"
          onAnimationEnd={onAnimationEnd}
          onAnimationStart={onAnimationStart}>
            {filterImages(images)}
        </div>
          
        <p className="text-info">{current === true ? 'Seguinte': 'Anterior'}</p>
    </div>
  );
};

export default memo(WebdoorFooterItem);