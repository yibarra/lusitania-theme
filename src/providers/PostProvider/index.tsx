import React, { FunctionComponent, useCallback, createContext, useState, useEffect } from 'react';
import axios from 'axios';

import UseLocalStorage from '../../uses/UseLocalStorage';

import { IPostContext, IPostProvider } from './interfaces';

// time
const time: any = process.env.REACT_APP_LOCALSTORAGE_TIME || 1;

// context
const PostContext = createContext({} as IPostContext);

// post provider
const PostProvider: FunctionComponent<IPostProvider> = ({ children }) => {
  // local index
  const localPostIndex: string = 'lusitania_theme_posts';
  const { checkHours, localStorageItem, setValue, setValueFunction }: any = 
    UseLocalStorage(localPostIndex, { items: [], date: Date.now() });

  // state
  const [ posts, setPosts ]: any = useState({ items: [], date: Date.now() });

  // get posts
  const getPosts = useCallback((setValue, setValueFunction, setPosts) => {
    return axios.get(`/houses?per_page=100`)
      .then(({ data }) => data)
      .then(items =>
        setValue(localPostIndex, { items, date: Date.now() }, setValueFunction).then(() => setPosts(items)));
  }, []);

  // get post by id
  const getPostById = useCallback((id) => {
    return axios.get(`/${id}`).then(({ data }) => data);
  }, []);

  // get post by category
  const getPostByCategoryName = useCallback((typePost: string, categoryName: string) => {
    return axios.get(`/${typePost}?filter=${categoryName}&per_page=100`).then(({ data }) => data);
  }, []);

  // get post by id
  const getCustomPostById = useCallback((typePost: string, id: number) => {
    return axios.get(`/${typePost}/${id}`).then(({ data }) => data);
  }, []);

  // load
  const load = useCallback((setValue, setValueFunction) => {
    const { items, date }: any = localStorageItem;
    
    if ((items && items.length > 0) && (checkHours(date) < time)) {
      setPosts({ items, date });
    } else {
      getPosts(setValue, setValueFunction, setPosts);
    }
  }, [ localStorageItem, setPosts, getPosts, checkHours ]);

  // use effect
  useEffect(() => {
    load(setValue, setValueFunction);
  }, [ load, setValue, setValueFunction ]);

  // render
  return (
    <PostContext.Provider value={{
      posts: posts.items,
      getPostByCategoryName,
      getPostById,
      getCustomPostById
    }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
export default PostProvider;