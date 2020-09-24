import React, { FunctionComponent, memo, useState } from 'react';

import CategoryHeader from './CategoryHeader';
import CategoryList from './CategoryList';

import { ICategory } from './interfaces';

import './category.scss';

// category
const Category: FunctionComponent<ICategory> = ({ categories: { items } }) => {
  const [ active, setActive ]: any = useState(null);

  return (
    <div className="category" data-active={active !== null}>
      <CategoryHeader setActive={setActive} />

      <CategoryList active={active} setActive={setActive} items={items} />
    </div>
  );
};

export default memo(Category);