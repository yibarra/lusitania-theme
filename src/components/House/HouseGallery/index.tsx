import React, { FunctionComponent, memo } from 'react';

import { IHouseGallery } from './interfaces';

import './house-gallery.scss';

// house gallery
const HouseGallery: FunctionComponent<IHouseGallery> = ({ item }) => {
  // render
  return (
    <div className="house--gallery">
      <div className="house--gallery--content" dangerouslySetInnerHTML={{ __html: item.content.rendered }}>
      </div>
    </div>
  );
};

export default memo(HouseGallery);