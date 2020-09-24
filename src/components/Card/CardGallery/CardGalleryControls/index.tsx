import React, { FunctionComponent, memo } from 'react';

import { ICardGalleryControls } from './interfaces';

import './card-gallery-controls.scss';

// card gallery controls
const CardGalleryControls: FunctionComponent<ICardGalleryControls> = ({ current, items, onPrevNext, setCurrent}) => {
  // render
  return (
    <div className="card--gallery--controls">
      <div className="card--gallery--controls--arrows">
        <button className="btn-arrow min" data-prev onClick={() => onPrevNext('prev')}>
          <span className="icon"></span>
        </button>

        <button className="btn-arrow min" data-next onClick={() => onPrevNext('next')}>
          <span className="icon"></span>
        </button>
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