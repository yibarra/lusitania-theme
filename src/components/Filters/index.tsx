import React, { FunctionComponent, memo, useCallback, useContext, useEffect, useState } from 'react';

import FiltersContent from './FiltersContent';

import { FiltersContext } from '../../providers/FiltersProvider';
import { PostContext } from '../../providers/PostProvider';
import { TagsContext } from '../../providers/TagsProvider';

import { IFilters } from './interfaces';

import './filters.scss';

// filters
const Filters: FunctionComponent<IFilters> = () => {
  const filtersContext: any = useContext(FiltersContext);
  const postsContext: any = useContext(PostContext);
  const tagsContext: any = useContext(TagsContext);

  const { posts }: any = postsContext;
  const { filters, getFilters, getFiltersQuery }: any = filtersContext;
  const { tags }: any = tagsContext;

  // create query
  const createQuery = useCallback((values: any []) => {
    if (!Array.isArray(values) || !values.length) return false;

    const metas: any [] = [];

    for (let value of values) {
      if (value instanceof Object)
        metas.push(`filter[meta_key]=${value.id}&filter[meta_value]=${value.value}`);
    }

    getFiltersQuery(metas);
  }, [ getFiltersQuery ]);
  
  // get items
  const requestItems = useCallback((items: any []) => {
    const inputs: any [] = items.filter((item :any) => item.active === true);
    let values: any [] = [];

    for (let input of inputs) {
      if (input instanceof Object) {
        for (let value of input.items) {
          if (value instanceof Object && value.value !== '') {
            values.push(value);
          }
        }
      }
    }

    createQuery(values);
  }, [ createQuery ]);

  // use effect
  useEffect(() => {
    getFilters(posts);
  }, [ posts, getFilters ]);

  // render
  return (
    <div className="filters">
      {filters &&
        <FiltersContent
          filters={filters}
          tags={tags}
          requestItems={requestItems} />}
    </div>
  )
};

export default memo(Filters);