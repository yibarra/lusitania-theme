import React, { FC, memo } from 'react';

import Webdoor from '../../components/Webdoor';

import { IHome } from './interfaces';

// home
const Home: FC<IHome> = ({ getPostByCategoryName }) => {
  // render
  return (
    <div className="home">
      <Webdoor
        category="highlights"
        getPostByCategoryName={getPostByCategoryName} />
    </div>
  );
};

export default memo(Home);