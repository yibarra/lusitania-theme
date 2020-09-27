import React, { FunctionComponent, memo, useState } from 'react';

import Category from '../../components/Category';
import Filters from '../../components/Filters';

import { FiltersProvider } from '../../providers/FiltersProvider';

import { IGallery } from './interfaces';

import './gallery.scss';

// gallery
const Gallery: FunctionComponent<IGallery> = ({ categories }) => {
  const [ filter, setFilter ] = useState(false);

  // render
  return (
    <div className="gallery">
      <Category categories={categories} />
      
      <FiltersProvider>
        <Filters />
      </FiltersProvider>
    </div>
  );
};

export default memo(Gallery);