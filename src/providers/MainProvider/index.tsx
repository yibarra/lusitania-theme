import React, { FunctionComponent, memo } from 'react';

import { CategoriesProvider } from '../CategoriesProvider';
import FiltersProvider from '../FiltersProvider';
import { PostProvider } from '../PostProvider';
import { TagsProvider } from '../TagsProvider';

import { IMainProvider } from './interfaces';

// Main Provider
const MainProvider: FunctionComponent<IMainProvider> = ({ children }) => {
  // render
  return (
    <CategoriesProvider>
      <TagsProvider>
        <PostProvider>
          <FiltersProvider>
            {children}
          </FiltersProvider>
        </PostProvider>
      </TagsProvider>
    </CategoriesProvider>
  );
};

export default memo(MainProvider);