import React, { FunctionComponent, useCallback, memo, useEffect, useState } from 'react';

import WebdoorContent from './WebdoorContent';

import { IWebdoor } from './interfaces';

import './webdoor.scss';

// webdoor
const Webdoor: FunctionComponent<IWebdoor> = ({ category, getPostByCategoryName }) => {
  // state
  const [ items, setItems ] = useState([]);

  // load items
  const load = useCallback(async (category: string) => {
    const data = await getPostByCategoryName('houses', category);

    if (data) 
      setItems(data);
  }, [ getPostByCategoryName ]);

  // use effect
  useEffect(() => {
    load(category);
  }, [ category, load ]);
  
  // render
  return (
    <div className="webdoor">
      {items.length > 0 && <WebdoorContent items={items} />}
    </div>
  );
};

export default memo(Webdoor);