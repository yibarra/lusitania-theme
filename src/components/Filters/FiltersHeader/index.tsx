import React, { FunctionComponent, memo } from 'react';

import { IFiltersHeader } from './interfaces';

import './filters-header.scss';

// filters header
const FiltersHeader: FunctionComponent<IFiltersHeader> = ({ current, setCurrent, items }) => {
  // render
  return (
    <div className="filters--header">
      <ul className="filters--header--list">
        {items && items.map(({ title, active }: any, index: number) =>
          <li className="filters--header--item" data-active={current === index} key={index}>
            <button
              className="btn-tab"
              data-active={active}
              onClick={() => setCurrent(current !== index ? index : null)}>{title}</button>
          </li>)}
      </ul>
    </div>
  );
};

export default memo(FiltersHeader);