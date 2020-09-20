import React, { FunctionComponent, memo, useCallback } from 'react';

import { IWebdoorInfoAttributes } from './interfaces';

import './webdoor-info-attributes.scss';

// webdoor info attributes
const WebdoorInfoAttributes: FunctionComponent<IWebdoorInfoAttributes> = ({ item }) => {
  // formatting info
  const formattingInfo = useCallback((item: any) => {
    if (item instanceof Object === false) return false;
    const { acf } = item;

    if (acf) {
      const { area, tipo }: any = acf;

      return <>
        <p><span>{tipo}</span></p>
        <p><span>{area} &#13217;</span></p>
      </>
    }
  }, []);
  
  // render
  return (
    <div className="webdoor--info--attributes">{formattingInfo(item)}</div>
  );
};

export default memo(WebdoorInfoAttributes);