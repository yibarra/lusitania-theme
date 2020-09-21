import React, { memo, FunctionComponent, useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import ListAddress from '../../List/ListAddress';
import ListAttributes from '../../List/ListAttributes';

import WebdoorFooter from '../WebdoorFooter';

import { IWebdoorInfo } from './interfaces';

import './webdoor-info.scss';

// Webdoor info
const WebdoorInfo: FunctionComponent<IWebdoorInfo> = ({ current, items, setCurrent }) => {
  const [ state, setState ]: any = useState({
    classNames: '',
    animationFinished: false
  });

  const item = items[current];

  // on animation start
  const onAnimationStart = useCallback(() => {
    setState({
      classNames: 'animation',
      animationFinished: false
    });
  }, [ setState ]);

  // on animation end
  const onAnimationEnd = useCallback(() => {
    setState({
      classNames: '',
      animationFinished: true
    });
  }, [ setState ]);

  // use effect
  useEffect(() => {
    onAnimationStart();
  }, [ current, onAnimationStart ]);

  // render
  return (
    <div
      className={`webdoor--info ${state.classNames}`}
      onAnimationEnd={onAnimationEnd}
      onAnimationStart={onAnimationStart}>
      {item && 
        <div className="webdoor--info--content">
          <h4 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

          <ListAddress item={item} />
          <ListAttributes item={item} />

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