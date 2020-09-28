import React, { FunctionComponent, useContext, memo } from 'react';

import Card from '../../Card';

import { FiltersContext } from '../../../providers/FiltersProvider';

import { IFiltersResult } from './interfaces';

import './filters-result.scss';

// filters results
const FiltersResult: FunctionComponent<IFiltersResult> = () => {
  const filterContext = useContext(FiltersContext);
  const { result } = filterContext;

  // render
  return (
    <div
      className="filters--result"
      data-active={result.length > 0}>
        <ul className="filters--result--list">
          {result && result.map((item: any, index: number) =>
            <li className="filters--result--item" key={index}>
              <Card item={item} />
            </li>)}
        </ul>
    </div>
  );
};

export default memo(FiltersResult);