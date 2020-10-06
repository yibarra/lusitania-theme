import React, { FunctionComponent, memo } from 'react';

import Card from '../../Card';

import { IFiltersResult } from './interfaces';

import './filters-result.scss';

// filters results
const FiltersResult: FunctionComponent<IFiltersResult> = ({ results }) => {
  // render
  return (
    <div className="filters--result" data-active={results.length > 0}>
      <div className="filters--result--title">
        <p>Resultado <span>{results.length}</span></p>
      </div>

      <ul className="filters--result--list">
        {results.map((item: any, index: number) =>
          <li className="filters--result--item" key={index}>
            <Card item={item} />
          </li>)}
      </ul>
    </div>
  );
};

export default memo(FiltersResult);