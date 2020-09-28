import React, { createContext, FunctionComponent, useState, useCallback } from 'react';
import axios from 'axios';

import { IFiltersContext, IFiltersProvider } from './interfaces';

// filters context
const FiltersContext = createContext({} as IFiltersContext);

// filters provider
const FiltersProvider: FunctionComponent<IFiltersProvider> = ({ children }) => {
  // state
  const [ filters, setFilters ]: any = useState({});

  // check item array
  const checkItemArray = useCallback((items: any [], item: any) => 
    (item !== '' && items.indexOf(item) === -1), []);

  // get filters posts
  const getFilters = useCallback((posts: any[]) => {
    if (posts instanceof Object === false) return false;

    const cities: any [] = [];
    const districts: any [] = [];
    const council: any [] = [];
    const neigh: any [] = [];
    const types: any [] = [];
    const zone: any [] = [];

    for (let i = 0; i < posts.length; i++) {
      const item = posts[i];

      if (item instanceof Object) {
        const { acf: { cidade, conselho, distrito, freguesia, tipo, zona } } = item;

        if (checkItemArray(cities, cidade))
          cities.push(cidade);
          
        if (checkItemArray(districts, distrito))
          districts.push(distrito);
          
        if (checkItemArray(council, conselho))
          council.push(conselho);
          
        if (checkItemArray(neigh, freguesia))
          neigh.push(freguesia);
          
        if (checkItemArray(types, tipo))
          types.push(tipo);
          
        if (checkItemArray(zone, zona))
          zone.push(zona);
      }
    }

    setFilters({ cities, council, districts, neigh, types, zone });
  }, [ checkItemArray, setFilters ]);

  // get filters query
  const getFiltersQuery = useCallback((values: any []) => {
    let queries: string = '';

    for (let value of values) {
      queries += `${value}&`;
    }

    //"https://www.julianibarra.com/lusitania/wp-json/wp/v2/"
    //"/houses?filter[meta_key]=cidade&filter[meta_value]=Portofilter[meta_key]=area&filter[meta_value]=10.00,100.00"

    axios.get(`houses?${queries}`).then((data) => console.log(data));
  }, []);

  // render
  return (
    <FiltersContext.Provider value={{
      filters,
      getFilters,
      getFiltersQuery
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
export default FiltersProvider;