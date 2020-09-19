import React, { FunctionComponent } from 'react';

import { CategoriesProvider } from '../CategoriesProvider';
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
          {children}
        </PostProvider>
      </TagsProvider>
    </CategoriesProvider>
  );
};

export default MainProvider;