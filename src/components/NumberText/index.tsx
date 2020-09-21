import React, { FunctionComponent, memo, useCallback } from 'react';

import { INumberText } from './interfaces';

import './number-text.scss';

// number text
const NumberText: FunctionComponent<INumberText> = ({ count, current, type }) => {
  // decimal
  const decimal = useCallback((numb: number) => {
    if (isNaN(numb)) return '00';

    return (numb < 9) ? `0${numb + 1}` : numb + 1;
  }, []);

  // render
  return (
    <div className="number--text" data-type={type}>
      <p className="current">{decimal(current)}</p>
      <p className="count">{decimal(count - 1)}</p>
    </div>
  );
};

export default memo(NumberText);