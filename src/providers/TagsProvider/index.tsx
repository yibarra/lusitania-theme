import React, { createContext, FunctionComponent, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import UseLocalStorage from '../../uses/UseLocalStorage';

import { ITagsContext, ITagsProvider } from './interfaces';


// tags context
const TagsContext = createContext({} as ITagsContext);

// tags provider
const TagsProvider: FunctionComponent<ITagsProvider> = ({ children }) => {
  const localIndex: string = 'lusitania_theme_tag';
  const { setValue }: any = UseLocalStorage(localIndex, { items: [], date: Date.now() });

  // state
  const [ tags, setTags ]: any = useState({ items: [], date: Date.now() });

  // get tag
  const getTagById = useCallback((id: number) => {
    return tags.items.filter((item: any) => item.id === id)[0];
  }, [ tags ]);

  // use effect
  useEffect(() => {
    const all = async () => {
      const data = await axios.get('/tags').then(({ data }) => data);

      if (data) {
        setValue(localIndex, {
          items: data,
          date: Date.now()
        }, setTags);
      }
    };

    all();
  }, [ setTags, setValue ]);

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