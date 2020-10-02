import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';

import { ISelect } from './interfaces';

import './select.scss';

// select
const Select: FunctionComponent<ISelect> = ({ item, placeholder, onChange }) => {
  // state
  const [ active, setActive ]: any = useState(false);
  const [ value, setValue ]: any = useState('');
  const { options, label } = item;
  
  // onChangeValue
  const onChangeValue = useCallback((value: any) => {
    setActive(false);
    setValue(value);
    onChange(value);
  }, [ onChange ]);

  // use effect
  useEffect(() => {
    console.log(value, 'please');
  }, [ value ]);

  // render
  return (
    <div className="select--container">
      <label className="input-label">{label}</label>
      <div className="select" data-active={active}>
        <div className="select--title" onClick={() => setActive(!active)}>
          {value || placeholder}
          <span className="material-icons">keyboard_arrow_down</span>
        </div>

        <ul className="select--component">
          <li className="select--component--item" data-disabled="false">{placeholder}</li>
          
          {options && options.map((item: any, index: number) =>
            <li
              className="select--component--item"
              data-active={value === item}
              onClick={() => onChangeValue(item)}
              key={index}>
              {item}
            </li>)}
        </ul>
      </div>
    </div>
  );
};

export default memo(Select);