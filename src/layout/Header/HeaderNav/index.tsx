import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './header-nav.scss';

/*
<NavLink to="/about" className="header--nav--item" activeClassName="active">quem somos</NavLink>
<NavLink to="/gallery" className="header--nav--item" activeClassName="active">galeria</NavLink>
<NavLink to="/map" className="header--nav--item" activeClassName="active">mapa</NavLink>
*/

// header nav
const HeaderNav = () => {
  const [ active, setActive ] = useState<boolean>();

  // render
  return (
    <nav className="header-nav" data-open={active}>
      <NavLink exact to="/" className="header-nav--item logo" activeClassName="active">
        <span className="icon icon-logo"></span>
      </NavLink>
      
      <ul className="header-nav--list">
        <NavLink to="/gallery" className="header-nav--item" activeClassName="active">galeria</NavLink>
        <NavLink to="/contact" className="header-nav--item" activeClassName="active">contato</NavLink>
      </ul>

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