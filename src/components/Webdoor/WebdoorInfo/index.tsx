import React, { memo, FunctionComponent, useContext } from 'react';

import { TagsContext } from '../../../providers/TagsProvider';

import WebdoorFooter from '../WebdoorFooter';
import WebdoorInfoTags from './WebdoorInfoTags';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, last, onPrevNext, items }) => {
  // tags context
  const tagsContext = useContext(TagsContext);
  const { getTagById } = tagsContext;

  // item
  const item = items[current];

  // formatting info
  const formattingInfo = (item: any) => {
    if (item instanceof Object === false) return false;
    const { acf } = item;

    if (acf) {
      const { area, tipo }: any = acf;

      return <>
        <p><span>{tipo}</span></p>
        <p><span>{area} &#13217;</span></p>
      </>
    }
  };

  // render
  return (
    <div className="webdoor--info">
      {item && 
        <div className="webdoor--info--content">
          <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

          <div className="webdoor--info--address">{}</div>
          <div className="webdoor--info--attributes">{formattingInfo(item)}</div>

          
          <WebdoorInfoTags tags={item.tags} getTagById={getTagById} />
        </div>}

      <WebdoorFooter current={current} last={last} items={items} />
    </div>
  );
};

export default memo(WebdoorInfo);