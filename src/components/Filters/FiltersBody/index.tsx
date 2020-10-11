import React, { FunctionComponent, memo, useContext } from 'react';

import FiltersItem from '../FiltersItem';

import { FiltersContext } from '../../../providers/FiltersProvider';

import { IFiltersBody } from './interfaces';

import './filters-body.scss';

// filters body
const FiltersBody: FunctionComponent<IFiltersBody> = ({ current, items }) => {
  // filters context
  const filtersContext = useContext(FiltersContext);
  const { inputs, results, onChange } = filtersContext;

  // render
  return (
    <div className="filters--body">
      <ul className="filters--body--list">
        {items && items.map((item, index: number) =>
          <li
            className="filters--body--item"
            data-active={current === index}
            key={index}>
            <FiltersItem item={item} inputs={inputs} results={results} onChange={onChange} />
          </li>)}
      </ul>
    </div>
  )
};

export default memo(FiltersBody);
