import React, { memo, FunctionComponent, useContext } from 'react';

import { TagsContext } from '../../../providers/TagsProvider';

import WebdoorFooter from '../WebdoorFooter';
import WebdoorInfoAttributes from './WebdoorInfoAttributes';
import WebdoorInfoTags from './WebdoorInfoTags';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, onPrevNext, items, setCurrent }) => {
  // tags context
  const tagsContext = useContext(TagsContext);
  const { getTagById } = tagsContext;

  // item
  const item = items[current];

  // render
  return (
    <div className="webdoor--info">
      {item && 
        <div className="webdoor--info--content">
          <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

          <div className="webdoor--info--address">{}</div>

          <WebdoorInfoAttributes item={item} />
          <WebdoorInfoTags tags={item.tags} getTagById={getTagById} />
        </div>}

      <WebdoorFooter current={current} items={items} setCurrent={setCurrent} />
    </div>
  );
};

export default memo(WebdoorInfo);