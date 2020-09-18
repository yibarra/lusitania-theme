import React, { FunctionComponent } from 'react';

import { CategoriesProvider } from '../CategoriesProvider';
import PostProvider from '../PostProvider';

import { IMainProvider } from './interfaces';

// Main Provider
const MainProvider: FunctionComponent<IMainProvider> = ({ children }) => {
  // render
  return (
    <CategoriesProvider>
      <PostProvider>
        {children}
      </PostProvider>
    </CategoriesProvider>
  );
};

export default MainProvider;