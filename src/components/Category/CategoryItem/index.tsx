import React, { memo, FunctionComponent, useEffect, useState } from 'react';

import CategoryItemList from './CategoryItemList';

import { ICategoryItem } from './interfaces';

import './category-item.scss';

// category item
const CategoryItem: FunctionComponent<ICategoryItem> = ({ active, category, index, getPostByCategoryId, setActive }) => {
  const [ categoryItems, setCategoryItems ]: any = useState([]);

  // use effect
  useEffect(() => {
    const load = async () => {
      const data = await getPostByCategoryId('houses', category.id);

      setCategoryItems(data);
    };

    load();
  }, [ category, getPostByCategoryId ]);

  return (
    <div className="category--item" data-active={active}>
      <h2>{category.name}</h2>

      <CategoryItemList items={categoryItems} />

      <button className="btn-more" onClick={() => setActive(index)}>
        <span className="text">ver todos</span>
      </button>   
    </div>
  );
};

export default memo(CategoryItem);