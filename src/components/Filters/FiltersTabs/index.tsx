import React, { FunctionComponent } from 'react';

import FiltersHeader from '../FiltersHeader';
import FiltersBody from '../FiltersBody';
import SliderBase from '../../Slider/Base';

import { IFiltersTabs } from './interfaces';

import './filters-tabs.scss';

// filters body
const FiltersTabs: FunctionComponent<IFiltersTabs> = ({ current, items, setCurrent, onChange, onClearInputs }) => {
  // render
  return (
    <div className="filters--tabs">
      <FiltersHeader
        current={current}
        items={items}
        onClearInputs={onClearInputs}
        setCurrent={setCurrent} />

      <FiltersBody
        current={current}
        items={items}
        onChange={onChange} />
    </div>
  );
};

export default SliderBase(FiltersTabs);