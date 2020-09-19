import React, { memo, FunctionComponent } from 'react';

import HeaderNav from './HeaderNav';

import { IHeader } from './interfaces';

import './header.scss';

// header
const Header: FunctionComponent<IHeader> = () => {
  // render
  return (
    <header className="header">
      <HeaderNav />
    </header>
  );
};

export default memo(Header);