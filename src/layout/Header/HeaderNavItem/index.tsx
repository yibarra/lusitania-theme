import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { IHeaderNavItem } from './interfaces';

import './header-nav-item.scss';

// header nav item
const HeaderNavItem: FC<IHeaderNavItem> = (props) => {
  const { children }: any = props;

  // render
  return (<NavLink {...props}>{children}</NavLink>);
};

export default HeaderNavItem;