import React, { FunctionComponent, memo, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CategoriesContext } from '../../providers/CategoriesProvider';
import { PostContext } from '../../providers/PostProvider';

import Home from '../../pages/Home';
import HouseElement from '../../pages/HouseElement';

import { IContent } from './interfaces';

// content
const Content: FunctionComponent<IContent> = () => {
  // context
  const categoriesContext: any = useContext(CategoriesContext);
  const postContext: any = useContext(PostContext);

  const { getPostByCategoryName, getCustomPostById } = postContext;
  const { categories } = categoriesContext;

  // render
  return (
    <div className="content">
      <Switch>
        <Route
          exact
          path={'/'}>
            <Home getPostByCategoryName={getPostByCategoryName} categories={categories} />
          </Route>

        <Route
          path={'/house/:id'}>
            <HouseElement getCustomPostById={getCustomPostById} />
        </Route>
      </Switch>
    </div>
  );
};

export default memo(Content);