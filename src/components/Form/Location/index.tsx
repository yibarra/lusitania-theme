import React, { FunctionComponent, memo, useCallback } from 'react';

import Select from '../Select';

import { ILocation } from './interfaces';

import './location.scss';

// location
const Location: FunctionComponent<ILocation> = ({ inputs, results, onChange }) => {
  // create
  const createSelects = useCallback((inputs: any) => {
    const selects: any = [];
    
    Object.values(inputs).forEach((input: any, index: number) => {
      if (input.type === 'location') {
        selects.push(
          <div className="location--item" key={index}>
            <Select
              items={inputs}
              item={input}
              onChange={(e) => onChange(e, input.id, results)}
              placeholder="Selecione uma opção" />
          </div>);
      }
    });

    return selects;
  }, [ results, onChange ]);

  // render
  return (
    <div className="location">
      {inputs && createSelects(inputs)}
    </div>
  );
};

export default memo(Location);