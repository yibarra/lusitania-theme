import React, { FunctionComponent } from 'react';

import FiltersBody from '../FiltersBody';
import FiltersHeader from '../FiltersHeader';
import SliderTabs from '../../Slider/Tabs';

import { IFiltersTabs } from './interfaces';

import './filters-tabs.scss';

// filters body
const FiltersTabs: FunctionComponent<IFiltersTabs> = ({ current, filters, items, setCurrent, onChange, onClearInputs }) => {
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
        filters={filters}
        onChange={onChange} />
    </div>
  );
};

export default SliderTabs(FiltersTabs);
