import React, { FunctionComponent, memo, useCallback } from 'react';

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
      <ul className="webdoor--footer--list">
        {items && items.map(({ content: { rendered } }: any, index: number) => 
          <li
            data-current={next(current, index)}
            data-last={prev(current, index)}
            className="webdoor--footer--item"
            key={index}
            onClick={() => setCurrent(index)}>
              <div className="images" dangerouslySetInnerHTML={{ __html: rendered }} key={index} />
            </li>)}
      </ul>
    </div>
  );
};

export default memo(WebdoorFooter);