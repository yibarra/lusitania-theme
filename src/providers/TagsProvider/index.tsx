import React, { createContext, FunctionComponent, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import UseLocalStorage from '../../uses/UseLocalStorage';

import { ITagsContext, ITagsProvider } from './interfaces';

// time
const time: any = process.env.REACT_APP_LOCALSTORAGE_TIME || 1;

// tags context
const TagsContext = createContext({} as ITagsContext);

// tags provider
const TagsProvider: FunctionComponent<ITagsProvider> = ({ children }) => {
  const localTagsIndex: string = 'lusitania_theme_tags';
  const { checkHours, localStorageItem, setValue, setValueFunction }: any = 
    UseLocalStorage(localTagsIndex, { items: [], date: Date.now() });

  // state
  const [ tags, setTags ]: any = useState({ items: [], date: Date.now() });

  // get tag
  const getTagById = useCallback((id: number) => {
    return tags.items.filter((item: any) => item.id === id)[0];
  }, [ tags ]);

  // get tags
  const getTags = useCallback((setValue: any, setValueFunction: any, setTags: any) => {
    return axios.get(`/tags`)
      .then(({ data }) => data)
      .then(items =>
        setValue(localTagsIndex, { items, date: Date.now() }, setValueFunction).then(() => setTags(items)));
  }, []);

  // load
  const load = useCallback((setValue, setValueFunction) => {
    const { items, date }: any = localStorageItem;
    
    if ((items && items.length > 0) && (checkHours(date) < time)) {
      setTags({ items, date });
    } else {
      getTags(setValue, setValueFunction, setTags);
    }
  }, [ localStorageItem, setTags, getTags, checkHours ]);

  // use effect
  useEffect(() => {
    load(setValue, setValueFunction);
  }, [ load, setValue, setValueFunction ]);

  // render
  return (
    <TagsContext.Provider value={{
      tags: tags.items,
      getTagById
    }}>
      {children}
    </TagsContext.Provider>
  );
};

export { TagsContext, TagsProvider };
export default TagsProvider;