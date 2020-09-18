import React, { FunctionComponent, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CategoriesContext } from '../../providers/CategoriesProvider';
import { PostContext } from '../../providers/PostProvider';

import Home from '../../pages/Home';

import { IContent } from './interfaces';

// content
const Content: FunctionComponent<IContent> = () => {
  // context
  const categoriesContext: any = useContext(CategoriesContext);
  const postContext: any = useContext(PostContext);

  const { getPostByCategoryName } = postContext;
  const { getCategoryById, getCategoryByName, categories } = categoriesContext;

  // render
  return (
    <div className="content">
      <Switch>
        <Route
          exact
          path={`/`}>
            <Home getPostByCategoryName={getPostByCategoryName} categories={categories} />
          </Route>
      </Switch>
    </div>
  );
};

export default Content;