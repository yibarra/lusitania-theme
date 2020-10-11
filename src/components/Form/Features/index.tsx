import React, { FC, memo, useCallback } from 'react';

import Select from '../Select';

import { IFeatures } from './interfaces';

import './features.scss';

// features
const Features: FC<IFeatures> = ({ inputs, results, onChange }) => {
  // create
  const createSelects = useCallback((inputs: any) => {
    const selects: any = [];
    
    Object.values(inputs).forEach((input: any, index: number) => {
      if (input.type === 'options') {
        selects.push(
          <div className="features--item" key={index}>
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
    <div className="features">
      {inputs && createSelects(inputs)}
    </div>
  );
};

export default memo(Features);