import React, { FunctionComponent, memo } from 'react';
import Tabs from '../../../Tabs';

import { IFiltersHeaderTabs } from './interfaces';

// filters header tabs
const FiltersHeaderTabs: FunctionComponent<IFiltersHeaderTabs> = ({ filters, tags }) => {
  const { cities, districts, council, neigh, zone }: any = filters;

  const tabs = [{
    title: "localização",
    items: [{
      label: 'Cidade',
      items: cities,
    }, {
      label: 'districts',
      items: districts,
    }, {
      label: 'council',
      items: council,
    }, {
      label: 'neigh',
      items: neigh,
    }, {
      label: 'zone',
      items: zone
    }]
  }, {
    title: "caracterÍsticas",
    items: [{
      label: 'Tipologia',
      items: filters.types,
    }, {
      label: 'Área',
      type: 'slider'
    }]
  }, {
    title: "mais filtros",
    items: [{
      label: 'Mais Filtros',
      items: tags
    }]
  }];

  // render
  return (
    <Tabs current={null} items={tabs} />
  )
};

export default memo(FiltersHeaderTabs);