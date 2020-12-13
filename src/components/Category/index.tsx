import React, { FC, memo, useState } from 'react';

import CategoryHeader from './CategoryHeader';
import CategoryList from './CategoryList';

import { ICategory } from './interfaces';

import './category.scss';

// category
const Category: FC<ICategory> = ({ categories }) => {
  const [ active, setActive ] = useState<any>(null);

  // render
  return (
    <div className="category" data-active={active !== null}>
      <CategoryHeader setActive={setActive} />

      <CategoryList active={active} setActive={setActive} items={categories} />
    </div>
  );
};

export default memo(Category);