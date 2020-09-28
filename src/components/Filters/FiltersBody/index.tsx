import React, { FunctionComponent, memo, useCallback } from 'react';

import FiltersResult from '../FiltersResult';
import Slider from '../../Form/Slider';
import Select from '../../Form/Select';

import { IFiltersBody } from './interfaces';

import './filters-body.scss';

// filters body
const FiltersBody: FunctionComponent<IFiltersBody> = ({ current, items, onChange }) => {
  // type element
  const typeElement = useCallback((element: any, index: number) => {
    if (element instanceof Object === false || !items.length) return false;

    const { type, label, id } = element;

    switch (type) {
      case 'select':
        return <div className="filters--body--item--select" key={index}>
          <Select
            label={label}
            options={element.items}
            onChange={(e) => onChange(e, id, items)} />
        </div>;
      case 'slider':
        return <div className="filters--body--item--slider" key={index}>
          <Slider label={label}
            range={{ min: 0, max: 100 }}
            connect={false}
            init={[0, 100]}
            onChange={(e) => onChange(e, id, items)} />
        </div>;
      case 'radio':
        return <div className="filters--body--item--tags" key={index}>
          <label className="label">{label}</label>
          <p>list tags</p>
        </div>
    }
  }, [ onChange, items ]);

  //type
  const typeTab = useCallback((items: any []) => {
    if (!Array.isArray(items)) return false;

    const elements: any [] = [];
    items.map((item, index) => elements.push(typeElement(item, index)));

    return elements;
  }, [ typeElement ]);

  // render
  return (
    <div className="filters--body">
      <ul className="filters--body--list">
        {items && items.map(({ items }, index: number) =>
          <li
            className="filters--body--item"
            key={index}
            data-active={current === index}>
            {typeTab(items)}
          </li>)}
      </ul>

      <FiltersResult />
    </div>
  )
};

export default memo(FiltersBody);