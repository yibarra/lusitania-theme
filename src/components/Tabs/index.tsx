import React, { FunctionComponent } from 'react';

import SliderBase from '../Slider/Base';
import TabsItem from './TabsItem';

import { ITabs } from './interfaces';

import './tabs.scss';

// tabs
const Tabs: FunctionComponent<ITabs> = ({ current, setCurrent, items }) => {
  return(
    <div className="tabs">
      {items && items.map((item: any, index: number) =>
        <TabsItem
          item={item}
          active={current === index}
          setCurrent={setCurrent}
          key={index}
          index={index} />)}
    </div>
  );
};

export default SliderBase(Tabs);