import React, { createContext, FunctionComponent, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { ITagsContext, ITagsProvider } from './interfaces';

// tags context
const TagsContext = createContext({} as ITagsContext);

// tags provider
const TagsProvider: FunctionComponent<ITagsProvider> = ({ children }) => {
  // state
  const [ tags, setTags ]: any = useState([]);

  // get tag
  const getTagById = useCallback((id: number) => {
    return tags.filter((item: any) => item.id === id)[0];
  }, [ tags ]);

  // use effect
  useEffect(() => {
    const all = async () => {
      const data = await axios.get('/tags').then(({ data }) => data);

      if (data)
        setTags(data);
    };

    all();
  }, [ setTags ]);

  // render
  return (
    <TagsContext.Provider value={{
      tags,
      getTagById
    }}>
      {children}
    </TagsContext.Provider>
  );
};

export { TagsContext, TagsProvider };
export default TagsProvider;