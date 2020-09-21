import React, { FunctionComponent, memo } from 'react';

import { IHouseGalleryControl } from './interfaces';

import './house-gallery-control.scss';

// house gallery control
const HouseGalleryControl: FunctionComponent<IHouseGalleryControl> = ({ active, current, count, onPrevNext }) => {
  // render
  return (
    <div className="house--gallery--control" data-active={active}>
      <button className="btn-arrow" data-prev onClick={() => onPrevNext('prev')} disabled={current === 0}>
        <span className="icon"></span>
      </button>

      <button className="btn-arrow" data-next onClick={() => onPrevNext('next')} disabled={current >= (count - 1)}>
        <span className="icon"></span>
      </button>
      
    </div>
  );
};

export default memo(HouseGalleryControl);