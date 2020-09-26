import React, { FunctionComponent, memo } from 'react';

import FiltersHeader from './FiltersHeader';
import FiltersBody from './FiltersBody';

import FiltersProvider from '../../providers/FiltersProvider';

import { IFilters } from './interfaces';

import './filters.scss';

// filters
const Filters: FunctionComponent<IFilters> = () => {
  return (
    <FiltersProvider>
      <div className="filters">
        <FiltersHeader />
        <FiltersBody />
      </div>
    </FiltersProvider>
  )
};

export default memo(Filters);