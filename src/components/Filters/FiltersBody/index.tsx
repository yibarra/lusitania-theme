import React, { FunctionComponent, memo } from 'react';

import FiltersItem from '../FiltersItem';

import { IFiltersBody } from './interfaces';

import './filters-body.scss';

// filters body
const FiltersBody: FunctionComponent<IFiltersBody> = ({ current, items, filters }) => {
  // render
  return (
    <div className="filters--body">
      <ul className="filters--body--list">
        {items && items.map((item, index: number) =>
          <li
            className="filters--body--item"
            data-active={current === index}
            key={index}>
            <FiltersItem item={item} filters={filters} />
          </li>)}
      </ul>
    </div>
  )
};

export default memo(FiltersBody);
