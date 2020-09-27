import React, { FunctionComponent } from 'react';

import FiltersHeader from '../FiltersHeader';
import FiltersBody from '../FiltersBody';
import SliderBase from '../../Slider/Base';

import { IFiltersTabs } from './interfaces';

import './filters-tabs.scss';

// filters body
const FiltersTabs: FunctionComponent<IFiltersTabs> = ({ current, items, setCurrent }) => {
  // render
  return (
    <div className="filters--tabs">
      <FiltersHeader
        current={current}
        items={items}
        setCurrent={setCurrent} />

      <FiltersBody
        current={current}
        items={items} />
    </div>
  );
};

export default SliderBase(FiltersTabs);