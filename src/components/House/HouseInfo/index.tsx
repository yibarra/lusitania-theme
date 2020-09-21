import React, { FunctionComponent } from 'react';

import { IHouseInfo } from './interfaces';

import './house-info.scss';
import ListAddress from '../../List/ListAddress';
import ListAttributes from '../../List/ListAttributes';

// house info
const HouseInfo: FunctionComponent<IHouseInfo> = ({ item }) => {
  // render
  return (
    <div className="house--info">
      <div className="house--info--title">
        <h2>{item.title.rendered}</h2>

        <ListAddress item={item} />
        <ListAttributes item={item} />

        {item.acf &&
          <p>{item.acf.descripcao}</p>}
      </div>
    </div>
  );
};

export default HouseInfo;