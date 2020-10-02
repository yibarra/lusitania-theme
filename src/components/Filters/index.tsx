import React, { FunctionComponent, memo, useContext, useEffect } from 'react';

import FiltersTabs from './FiltersTabs';

import { FiltersContext } from '../../providers/FiltersProvider';
import { PostContext } from '../../providers/PostProvider';

import { IFilters } from './interfaces';

import './filters.scss';

// filters
const Filters: FunctionComponent<IFilters> = () => {
  const filtersContext: any = useContext(FiltersContext);
  const postsContext: any = useContext(PostContext);

  const { posts }: any = postsContext;
  const { filters, result, inputs, getFilters, onClearInputs }: any = filtersContext;

  const tabs = [
    { title: 'localização', type: 'location' },
    { title: 'caracteristicas', type: 'options'},
    { title: 'mais filtros', type: 'tags' }
  ];

  // use effect
  useEffect(() => {
    getFilters(posts);
  }, [ posts, getFilters ]);

  // render
  return (
    <div className="filters" data-active={result.length > 0 && filters.lenght > 0}>
      <FiltersTabs
        filters={inputs}
        items={tabs}
        onClearInputs={onClearInputs}  />
    </div>
  )
};

export default memo(Filters);