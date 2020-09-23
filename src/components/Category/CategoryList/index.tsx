import React, { FunctionComponent, useContext, memo } from 'react';

import CategoryItem from '../CategoryItem';

import { PostContext } from '../../../providers/PostProvider';

import { ICategoryList } from './interfaces';

import './category-list.scss';

// category content
const CategoryList: FunctionComponent<ICategoryList> = ({ active, setActive, items }) => {
  const postContext: any = useContext(PostContext);
  const { getPostByCategoryId } = postContext;

  // render
  return (
    <div className="category--list" data-active={active !== null}>
      {items && items.map((category: any, index: number) =>
        <li className="category--list--item" key={index} data-active={active === index}>
          <CategoryItem
            active={active === index}
            index={index}
            category={category}
            setActive={setActive}
            getPostByCategoryId={getPostByCategoryId} />
        </li>)}
    </div>
  );
};

export default memo(CategoryList);