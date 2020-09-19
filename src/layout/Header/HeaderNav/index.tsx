import React from 'react';
import { NavLink } from 'react-router-dom';

import './header-nav.scss';

// header nav
const HeaderNav = () => {
  // render
  return (
    <nav className="header--nav">
      <NavLink to="/" className="header--nav--item logo">
        <span className="icon icon-logo"></span>
      </NavLink>
      
      <NavLink to="/quem somos" className="header--nav--item">quem somos</NavLink>
      <NavLink to="/" className="header--nav--item">galeria</NavLink>
      <NavLink to="/" className="header--nav--item">mapa</NavLink>
      <NavLink to="/" className="header--nav--item">contato</NavLink>
    </nav>
  );
};

export default HeaderNav;