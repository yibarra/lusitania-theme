import React, { memo, FunctionComponent, useContext, useCallback } from 'react';
import { TagsContext } from '../../../providers/TagsProvider';

import { IListTags } from './interfaces';

import './list-tags.scss';

// webdoor info tags
const ListTags: FunctionComponent<IListTags> = ({ tags }) => {
  // tags context
  const tagsContext = useContext(TagsContext);
  const { getTagById } = tagsContext;

  // tag
  const tag = useCallback((callback: any, id: number) => {
    if (!callback) return false;
    
    const item: any = callback(id);

    return item instanceof Object && item.name ? item.name : '';
  }, []);

  // render
  return (
    <div className="list--tags">
      {tags && tags.map((id: any, index: number) => 
        <p className="tag" key={index}>
          <small>{tag(getTagById, id)}</small>
        </p>)}
    </div>
  );
};

export default memo(ListTags);