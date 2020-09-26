import React, { FunctionComponent, memo, useContext, useEffect } from 'react';

import FiltersHeaderTabs from './FiltersHeaderTabs';

import { FiltersContext } from '../../../providers/FiltersProvider';
import { PostContext } from '../../../providers/PostProvider';
import { TagsContext } from '../../../providers/TagsProvider';

import { IFiltersHeader } from './interfaces';

import './filters-header.scss';

// filters header
const FiltersHeader: FunctionComponent<IFiltersHeader> = () => {
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
    <div className="filters--header">
      {filters &&
        <FiltersHeaderTabs filters={filters} tags={tags} />}
    </div>
  );
};

export default memo(FiltersHeader);