import React, { FunctionComponent, memo } from 'react';

import { IWebdoorFooter } from './interfaces';

import './webdoor-footer.scss';

// webdoor footer
const WebdoorFooter: FunctionComponent<IWebdoorFooter> = ({ current, last, items }) => {
  // return
  return (
    <div className="webdoor--footer">
      <ul className="webdoor--footer--list">
        {items && items.map(({ content: { rendered } }: any, index: number) => 
          <li
            data-current={current === index}
            data-last={last === index}
            className="webdoor--footer--item" key={index}>
              <div className="images" dangerouslySetInnerHTML={{ __html: rendered }} key={index} />
            </li>)}
      </ul>
    </div>
  );
};

export default memo(WebdoorFooter);