import React, { FunctionComponent, memo, useCallback } from 'react';

import FiltersTabs from './FiltersTabs';

import { IFilters } from './interfaces';

import './filters.scss';

// filters
const Filters: FunctionComponent<IFilters> = ({ inputs, results, onClearFilters }) => {
  const tabs = [
    { title: 'localização', type: 'location' },
    { title: 'caracteristicas', type: 'options'},
    { title: 'mais filtros', type: 'tags' }
  ];

  // count filters
  const countFilters = useCallback((id?: string) => {
    let count: number = 0;

    for (let key of Object.keys(inputs)) {
      const input: any = inputs[key];

      if (id) {
        if (id === input.type) {
          if (input.value !== '')
            ++count;
        }
      } else {
        if (input.value !== '')
          ++count;
      }
    }

    return count > 0;
  }, [ inputs ]);

  // render
  return (
    <div
      className="filters"
      data-active={results.length > 0 && countFilters()}>
      <FiltersTabs
        items={tabs}
        countFilters={countFilters}
        onClearFilters={onClearFilters} />
    </div>
  )
};

export default memo(Filters);