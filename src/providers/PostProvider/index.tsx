import React, { FunctionComponent, useCallback, createContext } from 'react';
import axios from 'axios';

import { IPostContext, IPostProvider } from './interfaces';

// context
const PostContext = createContext({} as IPostContext);

// post provider
const PostProvider: FunctionComponent<IPostProvider> = ({ children }) => {
  // get post by id
  const getPostById = useCallback((id) => {
    return axios.get(`/${id}`).then(({ data }) => data);
  }, []);

  // get post by category
  const getPostByCategoryName = useCallback((typePost: string, categoryName: string) => {
    return axios.get(`/${typePost}?filter=${categoryName}&per_page=10`).then(({ data }) => data);
  }, []);

  // render
  return (
    <PostContext.Provider value={{
      getPostByCategoryName,
      getPostById
    }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
export default PostProvider;