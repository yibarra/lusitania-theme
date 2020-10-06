import React, { FunctionComponent, useCallback, useState, useRef, memo } from 'react';

import UseClickOutSide from '../../../uses/UseClickOutSide';

import { ISelect } from './interfaces';

import './select.scss';

// select
const Select: FunctionComponent<ISelect> = ({ item, placeholder, onChange }) => {
  const ref: any = useRef();

  // state
  const [ active, setActive ]: any = useState(false);
  const { options, label, value, disabled } = item;
  
  // onChangeValue
  const onChangeValue = useCallback((value: any) => {
    setActive(false);
    onChange(value);
  }, [ onChange ]);

  // click out
  UseClickOutSide(ref, () => setActive(false));

  // render
  return (
    <div className="select--container" ref={ref} data-disabled={disabled}>
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