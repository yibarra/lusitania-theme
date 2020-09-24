import React, { FunctionComponent, memo } from 'react';

import { ICategoryHeader } from './interfaces';

import './category-header.scss';

// category header
const CategoryHeader: FunctionComponent<ICategoryHeader> = ({ setActive }) => {
  return (
    <div className="category--header">
      <button className="btn-more back" onClick={() => setActive(null)}>
        <span className="material-icons">keyboard_backspace</span>
        <span className="text">Voltar</span>
      </button>
    </div>
  );
};

export default memo(CategoryHeader);