import React, { FunctionComponent, memo } from 'react';

import Location from '../../Form/Location';
import Features from '../../Form/Features';

import { IFiltersItem } from './interfaces';

// filters item
const FiltersItem: FunctionComponent<IFiltersItem> = ({ item, inputs, results, onChange }) => {
  const { type } = item;

  // render
  return (
    <>
      {type === 'location' &&
        <Location
          inputs={inputs}
          results={results}
          onChange={onChange} />}
      
      {type === 'options' &&
        <Features
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