import React, { FunctionComponent, memo, useCallback } from 'react';

import Slider from '../../Form/Slider';
import Select from '../../Form/Select';

import { IFiltersBody } from './interfaces';

import "nouislider/distribute/nouislider.css";
import './filters-body.scss';

// filters body
const FiltersBody: FunctionComponent<IFiltersBody> = ({ current, items }) => {
  // type element
  const typeElement = useCallback((element: any, index: number) => {
    if (element instanceof Object === false) return false;

    const { type, items, label } = element;

    switch (type) {
      case 'select':
        return <div className="filters--body--item--select" key={index}>
            <Select label={label} options={items} />
          </div>;
      case 'slider':
        return <div className="filters--body--item--slider" key={index}>
            <Slider label={label}
              min={0}
              max={100}
              connect={true}
              init={10}
              end={100}
              onChange={(e) => console.log(e)} />
          </div>;
      case 'radio':
        return <div className="filters--body--item--tags" key={index}>
          <label className="label">{label}</label>
          <p>list tags</p>
        </div>
    }
  }, []);

  //type
  const typeTab = useCallback((items: any []) => {
    const elements: any [] = [];

    for (let i = 0; i < items.length; i++) {
      const item = typeElement(items[i], i);

      if (item) {
        elements.push(item);
      }
    }

    return elements;
  }, [ typeElement ]);

  // render
  return (
    <div className="filters--body">
      <ul className="filters--body--list">
        {items && items.map(({ title, items }, index: number) =>
          <li
            className="filters--body--item"
            key={index}
            data-active={current === index}>
            {typeTab(items)}
          </li>)}
      </ul>
    </div>
  )
};

export default memo(FiltersBody);