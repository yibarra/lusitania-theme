import React, { createContext, FunctionComponent, useState, useCallback } from 'react';

import { IFiltersContext, IFiltersProvider } from './interfaces';

// filters context
const FiltersContext = createContext({} as IFiltersContext);

// filters provider
const FiltersProvider: FunctionComponent<IFiltersProvider> = ({ children }) => {
  // state
  const [ filters, setFilters ]: any = useState([]);
  const [ inputs, setInputs ]: any = useState([
    {
      id: 'cidade',
      value: '',
      options: [],
      label: 'Cidade'
    }, {
      id: 'distrito',
      value: '',
      options: [],
      label: 'Distrito'
    }, {
      id: 'conselho',
      value: '',
      options: [],
      label: 'Conselho'
    }, {
      id: 'freguesia',
      value: '',
      options: [],
      label: 'Freguesia'
    }, {
      id: 'zona',
      value: '',
      options: [],
      label: 'Zona'
    }
  ]);

  const [ result, setResult ]: any = useState([]);

  // check item array
  const checkItemArray = useCallback((items: any [], item: any) => 
    (item !== '' && items.indexOf(item) === -1), []);

  // filter
  const setInputsFilter = useCallback((items: any) => {
    const values: any [] = inputs;

    console.log(values, 'values');

    for (let key in values) {
      const value = values[key];

      if (value instanceof Object) {
        const { id } = value;
  
        switch (id) {
          case 'cidade':
            values[key].options = items.cities;
            break;
          case 'distrito':
            values[key].options = items.districts;
            break;
          case 'conselho':
            values[key].options = items.councils;
            break;
          case 'freguesia':
            values[key].options = items.neighs;
            break;
          case 'zona':
            values[key].options = items.zones;
            break;
        }
      }
    }

    setInputs(values);
  }, [ setInputs, inputs ]);

  // get filters posts
  const getFilters = useCallback((posts: any[]) => {
    if (posts instanceof Object === false) return false;

    const areas: any[] = [];
    const cities: any[] = [];
    const districts: any[] = [];
    const councils: any[] = [];
    const neighs: any[] = [];
    const types: any[] = [];
    const zones: any[] = [];
    const values: any[] = [];

    for (let i = 0; i < posts.length; i++) {
      const item = posts[i];

      if (item instanceof Object) {
        const { acf: { area, cidade, conselho, distrito, freguesia, tipo, zona, valor } } = item;

        if (checkItemArray(areas, area))
          areas.push(area);

        if (checkItemArray(cities, cidade))
          cities.push(cidade);
          
        if (checkItemArray(districts, distrito))
          districts.push(distrito);
          
        if (checkItemArray(councils, conselho))
          councils.push(conselho);
          
        if (checkItemArray(neighs, freguesia))
          neighs.push(freguesia);
          
        if (checkItemArray(types, tipo))
          types.push(tipo);
          
        if (checkItemArray(zones, zona))
          zones.push(zona);

        if (checkItemArray(values, valor))
          values.push(valor);
      }
    }

    setInputsFilter({ cities, districts, councils, neighs, types, zones });
    setResult(posts);
  }, [ checkItemArray, setInputsFilter ]);

  // get update filters posts
  const getUpdateFilters = useCallback((posts: any[]) => {
    if (posts instanceof Object === false) return false;

    const areas: any[] = [];
    const cities: any[] = [];
    const districts: any[] = [];
    const councils: any[] = [];
    const neighs: any[] = [];
    const types: any[] = [];
    const zones: any[] = [];
    const values: any[] = [];

    for (let i = 0; i < posts.length; i++) {
      const item = posts[i];

      if (item instanceof Object) {
        const { acf: { area, cidade, conselho, distrito, freguesia, tipo, zona, valor } } = item;

        if (checkItemArray(areas, area))
          areas.push(area);

        if (checkItemArray(cities, cidade))
          cities.push(cidade);
          
        if (checkItemArray(districts, distrito))
          districts.push(distrito);
          
        if (checkItemArray(councils, conselho))
          councils.push(conselho);
          
        if (checkItemArray(neighs, freguesia))
          neighs.push(freguesia);
          
        if (checkItemArray(types, tipo))
          types.push(tipo);
          
        if (checkItemArray(zones, zona))
          zones.push(zona);

        if (checkItemArray(values, valor))
          values.push(valor);
      }
    }

    setInputsFilter({ cities, districts, councils, neighs, types, zones });
    setResult(posts);
  }, [ checkItemArray, setInputsFilter ]);

  // filter result
  const filterResult = useCallback((input: any, posts: any, inputs: any) => {
    if (inputs instanceof Object === false || posts instanceof Object === false) return false;

    return posts.filter(({ acf }: any) => acf[input.id] === input.value);
  }, []);

  // on change
  const onChange = useCallback((value: any, id: string, result: any) => {
    const temp: any = inputs;

    for (let index in temp) {
      const input: any = temp[index];

      if (input instanceof Object && input.id === id) {
        temp[index].value = value;

        if (value !== '' && result.length > 0) {
          getUpdateFilters(filterResult(input, result, inputs));
        }
      }
    }

    setInputs(temp);
  }, [ inputs, setInputs, filterResult, getFilters ]);

  // render
  return (
    <FiltersContext.Provider value={{
      result,
      filters,
      inputs,
      getFilters,
      onChange
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
export default FiltersProvider;