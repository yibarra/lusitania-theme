import React, { FunctionComponent, memo } from 'react';

import { ICardGalleryControls } from './interfaces';

import './card-gallery-controls.scss';

// card gallery controls
const CardGalleryControls: FunctionComponent<ICardGalleryControls> = ({ current, items, onPrevNext, setCurrent}) => {
  // render
  return (
    <div className="card--gallery--controls">
      <div className="card--gallery--controls--arrows">
        <button onClick={() => onPrevNext('prev')}>prev</button>
        <button onClick={() => onPrevNext('next')}>next</button>
      </div>

      <ul className="card--gallery--controls--buttons">
        {items && items.map((item: any, index: number) =>
          <li className="card--gallery--controls--buttons--item" key={index}>
            <button
              className="btn-min"
              data-active={index === current}
              onClick={() => setCurrent(index)}></button>
          </li>)}
      </ul>
    </div>
  );
};

export default memo(CardGalleryControls);