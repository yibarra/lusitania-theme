import React, { useCallback, FunctionComponent } from 'react';

import { animated as a } from 'react-spring';

import { IWebdoorItem } from './interfaces';

import './webdoor-item.scss';

// Webdoor item
const WebdoorItem: FunctionComponent<IWebdoorItem> = ({ display, drag, i, scale, x, items }) => {
  // item
  const item: any = items[i];
  
  // cleaner
  const cleaner = useCallback((content: string) => {
    const init = content.replace('<p>', '');
    const end = init.replace('</p>', '');

    return end;
  }, []);

  // render
  return (
    <a.div
      {...drag()}
      className="webdoor--item"
      key={i}
      style={{ display, transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
        <a.div style={{ scale }}>
          <div dangerouslySetInnerHTML={{ __html: cleaner(item.content.rendered) }}></div>
        </a.div>
    </a.div>
  );
};

export default WebdoorItem;