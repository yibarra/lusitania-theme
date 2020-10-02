import React, { FunctionComponent, memo } from 'react';

import Category from '../../components/Category';
import Filters from '../../components/Filters';

import { IGallery } from './interfaces';

import './gallery.scss';

// gallery
const Gallery: FunctionComponent<IGallery> = ({ categories }) => {
  // render
  return (
    <div className="gallery">
      <Filters />

      <Category
        categories={categories} />
    </div>
  );
};

export default memo(Gallery);