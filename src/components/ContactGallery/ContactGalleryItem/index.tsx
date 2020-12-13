import React, { FC, memo } from 'react';
import { animated as a } from 'react-spring';

import { IContactGalleryItem } from './interfaces';

import './contact-gallery-item.scss';

// house gallery item
const ContactGalleryItem: FC<IContactGalleryItem> = ({ display, drag, i, x, items }) => {
  // render
  return (
    <a.div
      {...drag()}
      className="contact--gallery--item"
      key={i}
      style={{ display, transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
      {items[i]}
    </a.div>
  );
};

export default memo(ContactGalleryItem);