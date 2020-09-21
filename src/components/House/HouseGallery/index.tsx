import React, { FunctionComponent, memo } from 'react';

import NumberText from '../../NumberText';

import { IHouseGallery } from './interfaces';

import './house-gallery.scss';

// house gallery
const HouseGallery: FunctionComponent<IHouseGallery> = ({ item }) => {
  // render
  return (
    <div className="house--gallery">
      <div className="house--gallery--content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />

      <NumberText current={0} count={5} type={1} />
    </div>
  );
};

export default memo(HouseGallery);