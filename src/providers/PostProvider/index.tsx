import React, { useCallback, createContext, FC } from 'react';
import axios from 'axios';

import useSWR from 'swr';

import { IPostContext, IPostProvider } from './interfaces';

// context
const PostContext = createContext({} as IPostContext);

// api
const api = (url: string) => axios.get(url).then(({ data }) => data);

// post provider
const PostProvider: FC<IPostProvider> = ({ children, url }) => {
  const { data }: any = useSWR<[any]>(url, api);

  // get query
  const getQuery = useCallback((query: string) => 
    axios.get(query).then(({ data }) => data), []);

  // get post by id
  const getPostById = useCallback((id) =>
    axios.get(`/${id}`).then(({ data }) => data), []);

  // get post category by id
  const getPostByCategoryId = useCallback((typePost: string, id: number) =>
    axios.get(`/${typePost}?categories=${id}`).then(({ data }) => data), []);

  // get post by category
  const getPostByCategoryName = useCallback((typePost: string, categoryName: string) =>
    axios.get(`/${typePost}?filter=${categoryName}&per_page=100`).then(({ data }) => data), []);

  // get post by id
  const getCustomPostById = useCallback((typePost: string, id: number) =>
    axios.get(`/${typePost}/${id}`).then(({ data }) => data), []);

  // render
  return (
    <PostContext.Provider value={{
      posts: data,
      getQuery,
      getPostByCategoryName,
      getPostByCategoryId,
      getPostById,
      getCustomPostById
    }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
export default PostProvider;