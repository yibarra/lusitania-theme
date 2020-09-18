import React, { FunctionComponent } from 'react';

import { IWebdoorControls } from './interfaces';

import './webdoor-controls.scss';

// Webdoor controls
const WebdoorControls: FunctionComponent<IWebdoorControls> = ({ current, count, onPrevNext }) => {
  // render
  return (
    <div className="webdoor--controls">
      <button className="btn" data-prev onClick={() => onPrevNext('prev')} disabled={current === 0}>
        <span className="icon"></span>
      </button>

      <button className="btn" data-next onClick={() => onPrevNext('next')} disabled={current >= (count - 1)}>
        <span className="icon"></span>
      </button>
    </div>
  );
};

export default WebdoorControls;