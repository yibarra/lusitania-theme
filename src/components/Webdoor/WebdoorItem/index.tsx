import React, { memo, FunctionComponent } from 'react';
import { animated as a } from 'react-spring';
import parse from 'html-react-parser';

import UseFilterImage from '../../../uses/UseFilterImage';

import { IWebdoorItem } from './interfaces';

import './webdoor-item.scss';

// Webdoor item
const WebdoorItem: FunctionComponent<IWebdoorItem> = ({ display, drag, i, x, items }) => {
  // item
  const item: any = items[i];
  // uses
  const { filterImages } = UseFilterImage();

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
    <a.div
      {...drag()}
      className="webdoor--item"
      key={i}
      style={{ display, transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
        {filterImages(images)[0]}
    </a.div>
  );
};

export default memo(WebdoorItem);