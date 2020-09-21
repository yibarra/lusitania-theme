import React, { FunctionComponent, memo } from 'react';

import HouseInfo from './HouseInfo';
import HouseGallery from './HouseGallery';

import { IHouse } from './interfaces';

import './house.scss';

// house
const House: FunctionComponent<IHouse> = ({ item }) => {
  // render
  return (
    <div className="house">
      <HouseGallery item={item} />

      <HouseInfo item={item} />
    </div>
  );
};

export default memo(House);