import React, { FunctionComponent, memo } from 'react';

import { IFiltersBody } from './interfaces';

import './filters-body.scss';

// filters body
const FiltersBody: FunctionComponent<IFiltersBody> = () => {
  return (
    <div className="filters-body"></div>
  );
};

export default memo(FiltersBody);