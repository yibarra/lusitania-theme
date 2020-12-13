import React, { FC } from 'react';
import HeaderNavItem from '../HeaderNavItem';

import { IHeaderNavMenu } from './interfaces';

import './header-nav-menu.scss';

// header nav menu
const HeaderNavMenu: FC<IHeaderNavMenu> = ({ items }) => {
  // render
  return (
    <>
      <HeaderNavItem exact to="/" className="header-nav--item logo" activeClassName="active">
        <span className="icon icon-logo"></span>
      </HeaderNavItem>
      
      <div className="header-nav--list">
        {items && items.map((item: any, index: number) =>
          <HeaderNavItem {...item} key={index}>{item.text}</HeaderNavItem>)}  
      </div>
    </>
  );
};

export default HeaderNavMenu;