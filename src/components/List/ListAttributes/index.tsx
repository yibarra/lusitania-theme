import React, { FunctionComponent, memo, useCallback } from 'react';

import { IListAttributes } from './interfaces';

import './list-attributes.scss';

// webdoor info attributes
const ListAttributes: FunctionComponent<IListAttributes> = ({ item }) => {
  // formatting info
  const formattingInfo = useCallback((item: any) => {
    if (item instanceof Object === false) return false;
    const { acf } = item;

    if (acf) {
      const { area, tipo }: any = acf;

      return <>
        <li className="list--attributes--item"><p><span>{area}&#13217;</span></p></li>
        <li className="list--attributes--item"><p><span>{tipo}</span></p></li>
      </>
    }
  }, []);
  
  // render
  return (
    <ul className="list--attributes">{formattingInfo(item)}</ul>
  );
};

export default memo(ListAttributes);