import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';

import { IWebdoorFooterItem } from './interfaces';

import './webdoor-footer-item.scss';

// webdoor footer item
const WebdoorFooterItem: FunctionComponent<IWebdoorFooterItem> = ({ current, last, index, rendered }) => {
  const [ animation, setAnimation ] = useState({ animationFinished: false });

  // on animation start
  const onAnimationStart = useCallback(() => {
    setAnimation({ animationFinished: false });
  }, [ setAnimation ]);

  // on animation finished
  const onAnimationEnd = useCallback(() => {
    setAnimation({ animationFinished: true });
  }, [ setAnimation ]);

  // use effect
  useEffect(() => {
    onAnimationStart();
  }, [ current, onAnimationStart ]);

  // render
  return (
    <div
      className="webdoor--footer--item"
      data-finish={animation.animationFinished}
      data-current={current}
      data-last={last}
      key={index}>
        <div
          className="images"
          onAnimationEnd={onAnimationEnd}
          onAnimationStart={onAnimationStart}
          dangerouslySetInnerHTML={{ __html: rendered }} key={index} />
          
        <p className="text-info">{current === true ? 'Seguinte': 'Anterior'}</p>
    </div>
  );
};

export default memo(WebdoorFooterItem);