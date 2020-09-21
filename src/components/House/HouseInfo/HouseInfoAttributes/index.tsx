import React, { FunctionComponent, memo } from 'react';

import ListTags from '../../../List/ListTags';

import { IHouseInfoAttributes } from './interfaces';

import './house-info-attributes.scss';

// house info attributes
const HouseInfoAttributes: FunctionComponent<IHouseInfoAttributes> = ({ tags, acf }) => {
  // attributes
  const { cidade, distrito, conselho, freguesia, zona } = acf;

  // render
  return (
    <div className="house--info--attributes">
      <ul className="house--info--attributes--list">
        <li className="house--info--attributes--item">
          <p> 
            <span>{cidade}</span>
            <small>Cidade</small>
          </p>
        </li>
        <li className="house--info--attributes--item">
          <p> 
            <span>{distrito}</span>
            <small>Distrito</small>
          </p>
        </li>
        <li className="house--info--attributes--item">
          <p> 
            <span>{conselho}</span>
            <small>Conselho</small>
          </p>
        </li>
        <li className="house--info--attributes--item">
          <p>
            <span>{freguesia}</span>
            <small>Freguesia</small>
          </p>
        </li>
        <li className="house--info--attributes--item">
          <p>
            <span>{zona}</span>
            <small>Zona</small>
          </p>
        </li>
      </ul>

      {tags &&
        <ListTags tags={tags} />}
    </div>
  );
};

export default memo(HouseInfoAttributes);