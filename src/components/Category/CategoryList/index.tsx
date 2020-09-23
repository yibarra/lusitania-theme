import React, { FunctionComponent, memo } from 'react';

import CategoryItem from '../CategoryItem';

import { ICategoryList } from './interfaces';

import './category-list.scss';

// category content
const CategoryList: FunctionComponent<ICategoryList> = ({ categories }) => {
  return (
    <ul className="category--list">
      {categories && categories.map((category: any, index: number) =>
        <li className="category--list--item" key={index}>
          <CategoryItem category={category} />
        </li>)}
    </ul>
  );
};

export default memo(CategoryList);