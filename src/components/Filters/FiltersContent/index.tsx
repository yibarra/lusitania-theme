import React, { FunctionComponent, memo } from 'react';

import FiltersTabs from '../FiltersTabs';

import { IFiltersContent } from './interfaces';

// filters content
const FiltersContent: FunctionComponent<IFiltersContent> = ({ filters, tags }) => {
  const { cities, districts, council, neigh, zone, types }: any = filters;

  const items = [{
    title: "localização",
    items: [{
      label: 'Cidade',
      items: cities,
      type: 'select'
    }, {
      label: 'Distrito',
      items: districts,
      type: 'select'
    }, {
      label: 'Conselho',
      items: council,
      type: 'select'
    }, {
      label: 'Freguesia',
      items: neigh,
      type: 'select'
    }, {
      label: 'Zona',
      items: zone,
      type: 'select'
    }]
  }, {
    title: "caracterÍsticas",
    items: [{
      label: 'Tipologia',
      items: types,
      type: 'select'
    }, {
      label: 'Área',
      type: 'slider'
    }]
  }, {
    title: "mais filtros",
    items: [{
      label: 'Mais Filtros',
      items: tags,
      type: 'checkbox'
    }]
  }];

  // render
  return (
    <>
      <FiltersTabs items={items} />
    </>
  )
};

export default memo(FiltersContent);