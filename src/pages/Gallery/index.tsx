import React, { FunctionComponent, memo, useState } from 'react';

import Category from '../../components/Category';
import Filters from '../../components/Filters';

import { IGallery } from './interfaces';

import './gallery.scss';

// gallery
const Gallery: FunctionComponent<IGallery> = ({ categories }) => {
  const [ filter, setFilter ] = useState(false);

  // render
  return (
    <div className="gallery">
      <Category categories={categories} />
      
      <Filters />
    </div>
  );
};

export default memo(Gallery);