import React, { FC, useContext } from 'react';

import Category from '../../components/Category';
import Filters from '../../components/Filters';

import { FiltersContext } from '../../providers/FiltersProvider';

import { IGallery } from './interfaces';

import './gallery.scss';

// gallery
const Gallery: FC<IGallery> = ({ categories }) => {
  const filtersContext = useContext(FiltersContext);
  const { inputs, results, onClearFilters, filterResult } = filtersContext;

  // render
  return (
    <div className="gallery">
      <Filters
        inputs={inputs}
        results={results}
        filterResult={filterResult}
        onClearFilters={onClearFilters} />

      <Category
        categories={categories} />
    </div>
  );
};

export default Gallery;