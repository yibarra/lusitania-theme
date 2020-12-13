import React, { createContext, useCallback, FC } from 'react';
import axios from 'axios';

import { ITagsContext, ITagsProvider } from './interfaces';

import useSWR from 'swr';

// api
const api = (url: string) => axios.get(url).then(({ data }) => data);

// tags context
const TagsContext = createContext({} as ITagsContext);

// tags provider
const TagsProvider: FC<ITagsProvider> = ({ children, url }) => {
  const { data }: any = useSWR<[any]>(url, api);

  // get tag
  const getTagById = useCallback((id: number) => {
    if (Array.isArray(data))
      return data.filter((item: any) => item.id === id)[0];

    return false;
  }, [ data ]);

  // render
  return (
    <TagsContext.Provider value={{
      tags: data,
      getTagById
    }}>
      {children}
    </TagsContext.Provider>
  );
};

export { TagsContext, TagsProvider };
export default TagsProvider;