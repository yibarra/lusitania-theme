import React, { FunctionComponent, memo } from 'react';
import { NavLink } from 'react-router-dom';

import ListAddress from '../List/ListAddress';
import ListAttributes from '../List/ListAttributes';

import { ICard } from './interfaces';

import './card.scss';

// card house
const Card: FunctionComponent<ICard> = ({ item }) => {
  const { title }: any = item;

  return (
    <div className="card">
      {item && 
        <div className="card--info">
          <h4 dangerouslySetInnerHTML={{ __html: title.rendered }} />

          <ListAddress item={item} />
          <ListAttributes item={item} />

          <NavLink className="btn-more" to={`/house/${item.id}`}>
            <span className="text">Ver casa</span>
            <span className="material-icons">add</span>
          </NavLink>
        </div>}
    </div>
  );
};

export default memo(Card);