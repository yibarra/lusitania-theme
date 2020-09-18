import React, { memo, FunctionComponent } from 'react';

import WebdoorControls from '../WebdoorControls';
import WebdoorFooter from '../WebdoorFooter';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, last, onPrevNext, items }) => {
  // render
  return (
    <div className="webdoor--info">
      <WebdoorControls count={items.length} current={current} onPrevNext={onPrevNext} />

      <WebdoorFooter current={current} last={last} items={items} />
    </div>
  );
};

export default memo(WebdoorInfo);