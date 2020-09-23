import React, { FunctionComponent, memo } from 'react';

import CategoryHeader from './CategoryHeader';
import CategoryList from './CategoryList';

import { ICategory } from './interfaces';

import './category.scss';

// category
const Category: FunctionComponent<ICategory> = ({ categories: { items } }) => {
  return (
    <div className="category">
      <CategoryHeader />
      <CategoryList categories={items} />
    </div>
  );
};

export default memo(Category);