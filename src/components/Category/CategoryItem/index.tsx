import React, { memo, FunctionComponent } from 'react';

import { ICategoryItem } from './interfaces';

import './category-item.scss';

// category item
const CategoryItem: FunctionComponent<ICategoryItem> = ({ category }) => {
  return (
    <div className="category--item">
      <h2>{category.name}</h2>
    </div>
  );
};

export default memo(CategoryItem);