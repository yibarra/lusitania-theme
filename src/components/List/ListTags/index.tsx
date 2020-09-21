import React, { memo, FunctionComponent } from 'react';

import { IListTags } from './interfaces';

import './list-tags.scss';

// webdoor info tags
const ListTags: FunctionComponent<IListTags> = ({ tags, getTagById }) => {
  // render
  return (
    <div className="list--tags">
      {tags && tags.map((item: any, index: number) => 
        <p className="tag" key={index}>
          <small>{getTagById(item).name}</small>
        </p>)}
    </div>
  );
};

export default memo(ListTags);