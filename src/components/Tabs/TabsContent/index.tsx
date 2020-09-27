import React, { FunctionComponent, memo } from 'react';
import Select, { Option } from 'rc-select';

import { ITabsContent } from './interfaces';

import './tabs-content.scss';

// tabs content
const TabsContent: FunctionComponent<ITabsContent> = ({ items }) => {

  const typeElement = (item: any) => {
    if (item instanceof Object === false) return false;

    const { type } = item;

    switch (type) {
      case 'select':
        return <Select>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>;
    }
  };

  // render
  return (
    <div className="tabs--content">
      {items && items.map((item: any, index: number) =>
        <li className="" key={index}>
          <p className="label">{item.label}</p>
          
          <div className="content">
            {typeElement(item)}
          </div>
        </li>)}
    </div>
  )
};

export default memo(TabsContent);