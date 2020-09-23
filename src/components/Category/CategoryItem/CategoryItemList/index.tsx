import React, { FunctionComponent } from 'react';

import Card from '../../../Card';

import { ICategoryItemList } from './interfaces';

import './category-item-list.scss';

// category item list
const CategoryItemList: FunctionComponent<ICategoryItemList> = ({ items }) => {
  return (
    <ul className="category--item--list">
      {Array.isArray(items) && items.map((item: any, index: number) =>
        <li className="category--item--list--item" key={index}>
          <Card item={item} />
        </li>)}
    </ul>
  );
};

export default CategoryItemList;