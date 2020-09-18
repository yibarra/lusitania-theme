import React, { FunctionComponent } from 'react';

import WebdoorControls from '../WebdoorControls';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, last, onPrevNext, items }) => {
  // render
  return (
    <div className="webdoor--info">
      <WebdoorControls count={items.length} current={current} onPrevNext={onPrevNext} />
    </div>
  );
};

export default WebdoorInfo;