import React, { memo, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import WebdoorInfoAddress from './WebdoorInfoAddress';
import WebdoorFooter from '../WebdoorFooter';
import WebdoorInfoAttributes from './WebdoorInfoAttributes';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, onPrevNext, items, setCurrent }) => {
  const item = items[current];

  // render
  return (
    <div className="webdoor--info">
      {item && 
        <div className="webdoor--info--content">
          <h6 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

          <WebdoorInfoAddress item={item} />
          <WebdoorInfoAttributes item={item} />

          <NavLink className="btn-more" to={`/house/${item.id}`}>
            <span className="text">Ver casa</span>
            <span className="material-icons">add</span>
          </NavLink>
        </div>}

      <WebdoorFooter current={current} items={items} setCurrent={setCurrent} />
    </div>
  );
};

export default memo(WebdoorInfo);