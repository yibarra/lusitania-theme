import React, { memo, FunctionComponent } from 'react';

import { IWebdoorInfoTags } from './interfaces';

import './webdoor-info-tags.scss';

// webdoor info tags
const WebdoorInfoTags: FunctionComponent<IWebdoorInfoTags> = ({ tags, getTagById }) => {
  // render
  return (
    <div className="webdoor--info--tags">
      {tags && tags.map((item: any, index: number) => 
        <p className="tag" key={index}>
          <small>{getTagById(item).name}</small>
        </p>)}
    </div>
  );
};

export default memo(WebdoorInfoTags);