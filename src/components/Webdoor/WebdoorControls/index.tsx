import React, { memo, FunctionComponent } from 'react';

import { IWebdoorControls } from './interfaces';

import './webdoor-controls.scss';

// Webdoor controls
const WebdoorControls: FunctionComponent<IWebdoorControls> = ({ current, count, items, onPrevNext, setCurrent }) => {
  // render
  return (
    <div className="webdoor--controls">
      <button
        className="btn-arrow"
        data-prev
        onClick={() => onPrevNext('prev')}
        disabled={current === 0}>
        <span className="icon"></span>
      </button>

      <ul className="webdoor--controls--list">
        {items && items.map((item: any, index: number) => 
          <li className="webdoor--controls--item" key={index}>
            <button className="btn-min" data-active={index === current} onClick={() => setCurrent(index)}></button>
          </li>)}
      </ul>

      <button
        className="btn-arrow"
        data-next
        onClick={() => onPrevNext('')}
        disabled={current >= (count - 1)}>
        <span className="icon"></span>
      </button>
    </div>
  );
};

export default memo(WebdoorControls);