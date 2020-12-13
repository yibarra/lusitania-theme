import React, { FC, useState } from 'react';

import HeaderNavMenu from '../HeaderNavMenu';

import { IHeaderNav } from './interfaces';

import './header-nav.scss';

// header nav
const HeaderNav: FC<IHeaderNav> = ({ items }) => {
  // active mobile
  const [ active, setActive ] = useState<boolean>();

  // render
  return (
    <nav className="header-nav" data-open={active}>
      <HeaderNavMenu items={items} />

      <button
        className="header-nav--mobile"
        data-active={active}
        onClick={() => setActive(!active)}>
        <span className="material-icons">menu</span>
        <span className="material-icons">close</span>
      </button>
    </nav>
  );
};

export default HeaderNav;