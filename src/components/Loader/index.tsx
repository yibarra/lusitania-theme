import React, { memo, useState } from 'react';

import './loader.scss';

// loader
const Loader = () => {
  // state
  const [ load, setLoad ] = useState(false);

  // render
  return (
    <div className="loader" data-active={load} onAnimationEnd={() => setLoad(true)}>
      <div className="loader--content">
        <span className="icon icon-logo"></span>
      </div>
    </div>
  );
};

export default memo(Loader);