import React from 'react';
import { NavLink } from 'react-router-dom';

import './header-nav.scss';

/*
<NavLink to="/about" className="header--nav--item" activeClassName="active">quem somos</NavLink>
      <NavLink to="/gallery" className="header--nav--item" activeClassName="active">galeria</NavLink>
      <NavLink to="/map" className="header--nav--item" activeClassName="active">mapa</NavLink>
      <NavLink to="/contact" className="header--nav--item" activeClassName="active">contato</NavLink>
      */

// header nav
const HeaderNav = () => {
  // render
  return (
    <nav className="header--nav">
      <NavLink to="/" className="header--nav--item logo" activeClassName="active">
        <span className="icon icon-logo"></span>
      </NavLink>
      
      
    </nav>
  );
};

export default HeaderNav;