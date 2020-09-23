import React, { FunctionComponent, memo } from 'react';

import { ICategoryHeader } from './interfaces';

import './category-header.scss';

// category header
const CategoryHeader: FunctionComponent<ICategoryHeader> = ({ setActive }) => {
  return (
    <div className="category--header">
      <button onClick={() => setActive(null)}>
        back
      </button>
    </div>
  );
};

export default memo(CategoryHeader);