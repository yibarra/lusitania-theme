import React, { FunctionComponent, memo } from 'react';

import Location from '../../Form/Location';

import { IFiltersItem } from './interfaces';

// filters item
const FiltersItem: FunctionComponent<IFiltersItem> = ({ item, filters }) => {
  const { type } = item;

  // render
  return (
    <>
      {type === 'location' &&
        <Location filters={filters} />}
    </>
  )
};

export default memo(FiltersItem);