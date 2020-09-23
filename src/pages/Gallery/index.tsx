import React, { FunctionComponent, memo, useState } from 'react';

import Category from '../../components/Category';

import { IGallery } from './interfaces';

import './gallery.scss';

// gallery
const Gallery: FunctionComponent<IGallery> = () => {
  const [ filter, setFilter ] = useState(false);

  // render
  return (
    <div className="gallery">
      <Category />
    </div>
  );
};

export default memo(Gallery);