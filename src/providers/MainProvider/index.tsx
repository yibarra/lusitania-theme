import React, { FC } from 'react';

import { CategoriesProvider } from '../CategoriesProvider';
import { FiltersProvider } from '../FiltersProvider';
import { PostProvider } from '../PostProvider';
import { TagsProvider } from '../TagsProvider';

import { IMainProvider } from './interfaces';

const { REACT_APP_KEY_ACF_POST, REACT_APP_URL_SERVER } = process.env;

// Main Provider
const MainProvider: FC<IMainProvider> = ({ children }) => {
  // render
  return (
    <CategoriesProvider url={`${REACT_APP_URL_SERVER}categories`}>
      <TagsProvider url={`${REACT_APP_URL_SERVER}tags`}>
        <PostProvider url={`/${REACT_APP_KEY_ACF_POST}?per_page=100`}>
          <FiltersProvider>
            {children}
          </FiltersProvider>
        </PostProvider>
      </TagsProvider>
    </CategoriesProvider>
  );
};

export default MainProvider;