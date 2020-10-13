import React, { FunctionComponent, memo, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CategoriesContext } from '../../providers/CategoriesProvider';
import { PostContext } from '../../providers/PostProvider';

import Home from '../../pages/Home';
import Gallery from '../../pages/Gallery';
import HousePage from '../../pages/HousePage';

import { IContent } from './interfaces';
import Contact from '../../pages/Contact';

// content
const Content: FunctionComponent<IContent> = () => {
  // context
  const categoriesContext: any = useContext(CategoriesContext);
  const postContext: any = useContext(PostContext);

  const { getPostByCategoryName, getCustomPostById } = postContext;
  const { categories }: any = categoriesContext;

  // render
  return (
    <>
      <Switch>
        <Route
          exact
          path="/">
          <Home
            getPostByCategoryName={getPostByCategoryName}
            categories={categories} />
        </Route>

        <Route
          exact
          path="/gallery">
          <Gallery
            categories={categories} />
        </Route>

        <Route
          exact
          path={'/gallery/:id'}>
            <HousePage
              getCustomPostById={getCustomPostById} />
        </Route>

        <Route
          path={'/contact'}>
          <Contact
            getPostByCategoryName={getPostByCategoryName} />
        </Route>
      </Switch>
    </>
  );
};

export default memo(Content);