import React, { memo, FunctionComponent, useContext } from 'react';

import { TagsContext } from '../../../providers/TagsProvider';

import WebdoorInfoAddress from './WebdoorInfoAddress';
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

          <WebdoorInfoAddress item={item} />
          <WebdoorInfoAttributes item={item} />
          <WebdoorInfoTags tags={item.tags} getTagById={getTagById} />

          <button className="btn-more">
            <span className="text">Ver mais</span>
            <span className="material-icons">add</span>
          </button>
        </div>}

      <WebdoorFooter current={current} items={items} setCurrent={setCurrent} />
    </div>
  );
};

export default memo(WebdoorInfo);