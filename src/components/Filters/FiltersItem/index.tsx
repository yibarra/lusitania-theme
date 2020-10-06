import React, { FunctionComponent, memo, useContext } from 'react';

import { FiltersContext } from '../../../providers/FiltersProvider';

import Location from '../../Form/Location';

import { IFiltersItem } from './interfaces';

// filters item
const FiltersItem: FunctionComponent<IFiltersItem> = ({ item }) => {
  const filtersContext = useContext(FiltersContext);
  const { inputs, results, onChange } = filtersContext;

  const { type } = item;

  // render
  return (
    <>
      {type === 'location' &&
        <Location
          inputs={inputs}
          results={results}
          onChange={onChange} />}
    </>
  )
};

export default memo(FiltersItem);

/*
import Location from '../../Form/Location';

<Location
  inputs={inputs}
  results={results}
  onChange={onChange} />
*/