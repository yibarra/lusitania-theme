import React, { FC } from 'react';

import HeaderNav from './HeaderNav';

import { IHeader } from './interfaces';

import './header.scss';

// header
const Header: FC<IHeader> = () => {
  // render
  return (
    <header className="header">
      <HeaderNav items={[
        { to: '/gallery', className: 'header-nav--item', text: 'galeria' },
        { to: '/contact', className: 'header-nav--item', text: 'contato' }
      ]} />
    </header>
  );
};

export default Header;