import React, { FunctionComponent, memo } from 'react';

import TabsContent from '../TabsContent';

import { ITabsItem } from './interfaces';

import './tabs-item.scss';

// tabs item
const TabsItem: FunctionComponent<ITabsItem> = ({ active, index, item, setCurrent }) => {
  const { title }: any = item;
  
  // render
  return (
    <div className="tabs--item" data-active={active}>
      <button onClick={() => setCurrent(index)}>{title}</button>

      <TabsContent items={item.items} />
    </div>
  );
};

export default memo(TabsItem);