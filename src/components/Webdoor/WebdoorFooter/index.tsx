import React, { FunctionComponent, memo, useCallback } from 'react';

import WebdoorFooterItem from './WebdoorFooterItem';

import { IWebdoorFooter } from './interfaces';

import './webdoor-footer.scss';

// webdoor footer
const WebdoorFooter: FunctionComponent<IWebdoorFooter> = ({ current, items, setCurrent }) => {
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

  // return
  return (
    <div className="webdoor--footer">
      {items && items.map(({ content: { rendered } }: any, index: number) => 
        <WebdoorFooterItem
          current={next(current, index)}
          last={prev(current, index)}
          index={index}
          key={index}
          rendered={rendered}
          setCurrent={setCurrent} />)}
    </div>
  );
};

export default memo(WebdoorFooter);