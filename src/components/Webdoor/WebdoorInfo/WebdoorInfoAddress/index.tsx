import React, { FunctionComponent, memo } from 'react';

import { IWebdoorInfoAddress } from './interfaces';

import './webdoor-info-address.scss';

// webdoor info address
const WebdoorInfoAddress: FunctionComponent<IWebdoorInfoAddress> = ({ item: { acf } }) => {
  // info
  const { cidade, distrito } = acf;

  // render
  return (
    <div className="webdoor--info--address">
      <p><strong>{distrito}</strong>, {cidade}</p>
    </div>
  );
};

export default memo(WebdoorInfoAddress);