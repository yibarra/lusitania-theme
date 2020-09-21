import React, { FunctionComponent } from 'react';

import HouseInfoAttributes from './HouseInfoAttributes';
import ListAddress from '../../List/ListAddress';
import ListAttributes from '../../List/ListAttributes';

import { IHouseInfo } from './interfaces';

import './house-info.scss';

// house info
const HouseInfo: FunctionComponent<IHouseInfo> = ({ item, active, setActive }) => {
  // render
  return (
    <div className="house--info" data-active={active}>
      

      <button className="btn-clear" data-active={active} onClick={() => setActive(!active)}>
        <span className="material-icons">fullscreen</span>
        <span className="material-icons">fullscreen_exit</span>
      </button>

      <div className="house--info--title">
        <h2>{item.title.rendered}</h2>

        <ListAddress item={item} />
        <ListAttributes item={item} />

        {item.acf &&
          <p>{item.acf.descripcao}</p>}
      </div>

      <HouseInfoAttributes tags={item.tags} acf={item.acf} />
    </div>
  );
};

export default HouseInfo;