import React, { FunctionComponent, memo, useCallback } from 'react';
import SelectSearch from 'react-select-search';

import { ISelect } from './interfaces';

import './select.scss';

// select
const Select: FunctionComponent<ISelect> = ({ options, label, value, placeholder, onChange }) => {
  // filter select
  const filterSelect = useCallback((items: any[]) => {
    if (!Array.isArray(items)) return [];

    const elements: any[] = [{ name: 'Selecionar opção', value: '', disabled: true }];
    items.map((item: any) => elements.push({ name: item, value: item }));

    return elements;
  }, []);

  // render
  return (
    <>
      <label className="input-label">{label}</label>
      <SelectSearch
        search
        value={value}
        onChange={(value) => onChange(value)}
        options={filterSelect(options)}
        placeholder={placeholder} />
    </>
  )
};

export default memo(Select);