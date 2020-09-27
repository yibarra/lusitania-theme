import React, { FunctionComponent, memo, useContext, useEffect } from 'react';

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
  const { filters, getFilters }: any = filtersContext;
  const { tags }: any = tagsContext;

  // use effect
  useEffect(() => {
    getFilters(posts);
  }, [ posts, getFilters ]);

  // render
  return (
    <div className="filters">
      {filters &&
        <FiltersContent filters={filters} tags={tags} />}
    </div>
  )
};

export default memo(Filters);