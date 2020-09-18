import React, { memo, FunctionComponent } from 'react';

import { animated as a } from 'react-spring';

import { IWebdoorItem } from './interfaces';

import './webdoor-item.scss';

// Webdoor item
const WebdoorItem: FunctionComponent<IWebdoorItem> = ({ display, drag, i, scale, x, items }) => {
  // item
  const item: any = items[i];

  // render
  return (
    <a.div
      {...drag()}
      className="webdoor--item"
      key={i}
      style={{ display, transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
        <a.div style={{ scale }}>
          <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
        </a.div>
    </a.div>
  );
};

export default memo(WebdoorItem);