import React, { FunctionComponent, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { IHouseInfoHeader } from './interfaces';

import './house-info-header.scss';

// house info header
const HouseInfoHeader: FunctionComponent<IHouseInfoHeader> = ({ active, id, setActive }) => {
  // render
  return (
    <div className="house--info--header">
      <NavLink className="btn-map" to={`/map/${id}`}>
        <span className="material-icons">location_on</span>
        <span className="text">Ver no mapa</span>
      </NavLink>

      <button className="btn-clear" data-active={active} onClick={() => setActive(!active)}>
        <span className="material-icons">fullscreen</span>
        <span className="material-icons">fullscreen_exit</span>
      </button>
    </div>
  );
};

export default memo(HouseInfoHeader);