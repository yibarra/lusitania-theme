import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';

import FiltersTabs from '../FiltersTabs';

import { IFiltersContent } from './interfaces';

// filters content
const FiltersContent: FunctionComponent<IFiltersContent> = ({ filters, tags, requestItems }) => {
  const [ inputs, setInputs ]: any = useState([]);

  // clear
  const onClearInputs = useCallback((inputs: any) => {
    if (!Array.isArray(inputs) || !inputs.length) return false;
    
    const values: any = inputs;
    
    for (let i = 0; i < inputs.length; i++) {
      const { items } = inputs[i];
      
      for (let k = 0; k < items.length; k++) {
        values[i].items[k].value = '';
      }

      inputs[i].active = false;
    }
    
    console.log(inputs);
    
    setInputs(values);
    requestItems(values);
  }, [ requestItems ]);

  // on change
  const onChange = useCallback((value: any, id: number, inputs: any) => {
    if (!Array.isArray(inputs) || !inputs.length) return false;

    const values: any = inputs;

    for (let i = 0; i < inputs.length; i++) {
      let count = 0;
      const { items } = inputs[i];

      for (let k = 0; k < items.length; k++) {
        const input = items[k];

        if (id === input.id) {
          values[i].items[k].value = value;
        }

        if (values[i].items[k].value !== '') {
          count++;
        }
      }

      values[i].active = count > 0;
    }

    setInputs(values);
    requestItems(values);
  }, [ requestItems ]);

  // set 
  useEffect(() => {
    // filters
    const { cities, districts, council, neigh, zone, types }: any = filters;

    setInputs([{
      title: "localização",
      items: [{
        label: 'Cidade',
        items: cities,
        type: 'select',
        id: 'cidade',
        value: ''
      }, {
        label: 'Distrito',
        items: districts,
        type: 'select',
        id: 'distrito',
        value: ''
      }, {
        label: 'Conselho',
        items: council,
        type: 'select',
        id: 'conselho',
        value: ''
      }, {
        label: 'Freguesia',
        items: neigh,
        type: 'select',
        id: 'freguesia',
        value: ''
      }, {
        label: 'Zona',
        items: zone,
        type: 'select',
        id: 'zona',
        value: ''
      }],
      active: false,
    }, {
      title: "caracterÍsticas",
      items: [{
        label: 'Tipologia',
        items: types,
        type: 'select',
        id: 'tipo',
        value: ''
      }, {
        label: 'Área',
        type: 'slider',
        id: 'area',
        value: ''
      }],
      active: false,
    }, {
      title: "mais filtros",
      items: [{
        label: 'Mais Filtros',
        items: tags,
        type: 'checkbox',
        id: 'tags',
        value: ''
      }],
      active: false,
    }]);
  }, [ filters, tags ]);

  // render
  return (
    <>
      <FiltersTabs
        items={inputs}
        onClearInputs={onClearInputs}
        onChange={onChange} />
    </>
  )
};

export default memo(FiltersContent);