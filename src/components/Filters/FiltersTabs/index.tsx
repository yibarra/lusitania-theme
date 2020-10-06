import React, { FunctionComponent, useState, memo } from 'react';

import FiltersBody from '../FiltersBody';
import FiltersHeader from '../FiltersHeader';

import { IFiltersTabs } from './interfaces';

import './filters-tabs.scss';

// filters body
const FiltersTabs: FunctionComponent<IFiltersTabs> = ({ items, countFilters, onClearFilters }) => {
  const [ current, setCurrent ]: any = useState(null);

  // render
  return (
    <div className="filters--tabs">
      <FiltersHeader
        current={current}
        items={items}
        countFilters={countFilters}
        onClearFilters={onClearFilters}
        setCurrent={setCurrent} />

      <FiltersBody
        current={current}
        items={items} />
    </div>
  );
};

export default memo(FiltersTabs);
