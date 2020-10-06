import React, { FunctionComponent, memo, useCallback } from 'react';

import { IFiltersHeader } from './interfaces';

import './filters-header.scss';

// filters header
const FiltersHeader: FunctionComponent<IFiltersHeader> = ({ current, countFilters, setCurrent, items, onClearFilters }) => {
  // on clear
  const onClear = useCallback(() => {
    setCurrent(null);
    onClearFilters();
  }, [ setCurrent, onClearFilters ]);

  // render
  return (
    <div className="filters--header">
      <ul className="filters--header--list">
        {items && items.map(({ type, title }: any, index: number) =>
          <li className="filters--header--item" data-active={current === index} key={index}>
            <button
              className="btn-tab"
              data-active={countFilters(type)}
              onClick={() => setCurrent(current !== index ? index : null)}>{title}</button>
          </li>)}
      </ul>

      <div className="filters--header--clear" data-active={countFilters()}>
        <button className="btn-more" onClick={() => onClear()}>
          <span className="material-icons">clear</span>
          <span className="text">Limpar Filtros</span>
        </button>
      </div>
    </div>
  );
};

export default memo(FiltersHeader);