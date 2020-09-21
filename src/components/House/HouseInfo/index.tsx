import React, { FunctionComponent } from 'react';

import HouseInfoAttributes from './HouseInfoAttributes';
import HouseInfoHeader from './HouseInfoHeader';
import ListAddress from '../../List/ListAddress';
import ListAttributes from '../../List/ListAttributes';

import { IHouseInfo } from './interfaces';

import './house-info.scss';

// house info
const HouseInfo: FunctionComponent<IHouseInfo> = ({ item, active, setActive }) => {
  // render
  return (
    <div className="house--info" data-active={active}>
      <HouseInfoHeader
        active={active}
        id={item.id}
        setActive={setActive} />

      <div className="house--info--title">
        <h2>{item.title.rendered}</h2>

        <ListAddress item={item} />
        <ListAttributes item={item} />
        
        {item.acf && <p>{item.acf.descripcao}</p>}
      </div>

      <HouseInfoAttributes tags={item.tags} acf={item.acf} />
    </div>
  );
};

export default HouseInfo;