import React, { FunctionComponent, memo } from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';

import CardGallery from './CardGallery';
import ListAddress from '../List/ListAddress';
import ListAttributes from '../List/ListAttributes';

import UseFilterImage from '../../uses/UseFilterImage';

import { ICard } from './interfaces';

import './card.scss';

// card house
const Card: FunctionComponent<ICard> = ({ item }) => {
  // uses
  const { filterImages } = UseFilterImage();
  const { title }: any = item;
  
  // images
  const images: any = parse(item.content.rendered, {
    replace: ({ attribs, name, children }) => {
      if (!attribs) return null;
      
      if (attribs && attribs.class === 'wp-block-image')
      return children;
    }
  });
  
  // render
  return (
    <div className="card">
      <CardGallery items={filterImages(images)} />

      <div className="card--info">
        <h4 dangerouslySetInnerHTML={{ __html: title.rendered }} />

        <ListAddress item={item} />
        <ListAttributes item={item} />

        <NavLink className="btn-more" to={`/house/${item.id}`}>
          <span className="text">Ver casa</span>
          <span className="material-icons">add</span>
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Card);