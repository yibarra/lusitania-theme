import React, { createContext, FunctionComponent, useState, useCallback, useReducer, useEffect, useContext } from 'react';
import { PostContext } from '../PostProvider';

import { IFiltersContext, IFiltersProvider } from './interfaces';

// filters context
const FiltersContext = createContext({} as IFiltersContext);

// reducer
const reducer = (state: any, action: any) => {
  switch (action) {
    case 'cidade':
      return { cities: { ...state } };
    case 'distrito':
      return { districts: { ...state } };
    case 'conselho':
      return { councils: { ...state } };
    case 'freguesia':
      return { neighs: { ...state } };
    case 'zona':
      return { zones: { ...state } };
    default:
      return { ...state }
  }
};

// filters provider
const FiltersProvider: FunctionComponent<IFiltersProvider> = ({ children }) => {
  const postsContext = useContext(PostContext);
  const { posts } = postsContext;

  // state
  const [ inputs, setInputs ]: any = useReducer(reducer, {
    cities: {
      id: 'cidade',
      value: '',
      options: [],
      label: 'Cidade',
      disabled: false,
      type: 'location'
    },
    districts: {
      id: 'distrito',
      value: '',
      options: [],
      label: 'Distrito',
      disabled: true,
      type: 'location'
    }, 
    councils: {
      id: 'conselho',
      value: '',
      options: [],
      label: 'Conselho',
      disabled: true,
      type: 'location'
    },
    neighs: {
      id: 'freguesia',
      value: '',
      options: [],
      label: 'Freguesia',
      disabled: true,
      type: 'location'
    },
    zones: {
      id: 'zona',
      value: '',
      options: [],
      label: 'Zona',
      disabled: true,
      type: 'location'
    },
    types: {
      id: 'tipo',
      value: '',
      options: [],
      label: 'Tipologia',
      type: 'options'
    },
    tags: {
      id: 'tags',
      value: '',
      ooptions: [],
      label: 'Mais Filtros',
      type: 'tags'
    }
  });
  const [ results, setResults ]: any = useState([]);

  // check item array
  const checkItemArray = useCallback((items: any [], item: any) => 
    (item !== '' && items.indexOf(item) === -1), []);

  // filter
  const setInputsFilter = useCallback((items: any) => {
    const filters: any = inputs;

    for (let i of Object.keys(filters)) {
      const item: any = filters[i];

      if (item instanceof Object) {
        for (let k of Object.keys(items)) {
          const option: any = items[k];

          if (option instanceof Object) {
            if (i === k) {
              filters[i].options = option;
            }
          }
        }
      }
    }

    return inputs;
  }, [ inputs ]);

  // get filters posts
  const getFilters = useCallback((posts) => {
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
    setResults(posts);
  }, [ checkItemArray, setInputsFilter ]);

  // get update filters posts
  const getUpdateFilters = useCallback((posts: any[], id: string) => {
    if (posts instanceof Object === false) return false;

    const areas: any[] = [];
    const districts: any[] = [];
    const councils: any[] = [];
    const neighs: any[] = [];
    const types: any[] = [];
    const zones: any[] = [];
    const values: any[] = [];

    for (let i = 0; i < posts.length; i++) {
      const item = posts[i];

      if (item instanceof Object) {
        const { acf: { area, conselho, distrito, freguesia, zona } } = item;
          
        if (checkItemArray(districts, distrito) && id === 'cidade') {
          districts.push(distrito);
          councils.push(conselho);
          neighs.push(freguesia);
          zones.push(zona);
        }
          
        if (checkItemArray(councils, conselho) && id === 'distrito') {
          councils.push(conselho);
          neighs.push(freguesia);
          zones.push(zona);
        }
          
        if (checkItemArray(neighs, freguesia) && id === 'conselho') {
          neighs.push(freguesia);
          zones.push(zona);
        }

        if (checkItemArray(zones, zona) && id === 'freguesia') {
          zones.push(zona);
        }
          
        if (checkItemArray(areas, area) && id === 'area') {
          areas.push(area);
        }
      }
    }

    if (id === 'cidade')
      return { districts, councils, neighs, zones, values };

    if (id === 'distrito')
      return { councils, neighs, zones, values };

    if (id === 'conselho')
      return { neighs, zones, values };

    if (id === 'freguesia')
      return { types, zones, values };
  }, [ checkItemArray ]);

  // filter results
  const filterResult = useCallback((input: any, posts: any, inputs: any) => {
    if (inputs instanceof Object === false || posts instanceof Object === false) return false;

    return posts.filter(({ acf }: any) => {
      const { id, value } = input;

      return acf[id] === value;
    });
  }, []);

  // on change
  const onChange = useCallback((value: any, id: string, results: any) => {
    let item: any;
    const items: any = inputs;
    
    for (let key in inputs) {
      const input = inputs[key];

      if (input.id === id) {
        item = input;
        item.value = value;
      }
    }

    const filterItems: any = getUpdateFilters(filterResult(item, results, inputs), id);

    if (filterItems instanceof Object && Object.keys(filterItems).length) {
      switch (id) {
        case 'cidade':
          items.districts.value = '';
          items.councils.value = '';
          items.neighs.value = '';
          items.zones.value = '';

          items.districts.disabled = false;
          items.districts.options = filterItems.districts;

          setInputs(items.districts, 'distrito');
          setInputs(items.councils, 'conselho');
          setInputs(items.neighs, 'freguesia');
          setInputs(items.zones, 'zona');
        break;
        case 'distrito':
          items.councils.value = '';
          items.neighs.value = '';
          items.zones.value = '';

          items.councils.disabled = false;
          items.councils.options = filterItems.councils;

          setInputs(items.councils, 'conselho');
          setInputs(items.neighs, 'freguesia');
          setInputs(items.zones, 'zona');
        break;
        case 'conselho':
          items.neighs.value = '';
          items.zones.value = '';

          items.neighs.disabled = false;
          items.neighs.options = filterItems.neighs;

          setInputs(items.neighs, 'freguesia');
          setInputs(items.zones, 'zona');
        break;
        case 'freguesia':
          items.zones.value = '';
          items.zones.disabled = false;
          items.zones.options = filterItems.zones;

          setInputs(items.zones, 'zona');
        break;
      }
    }

    setInputs(item, id);
  }, [ inputs, setInputs, filterResult, getUpdateFilters ]);

  // on on clear filters
  const onClearFilters = useCallback(() => {
    const items: any = inputs;

    if (items instanceof Object && Object.keys(items).length) {
      for (let k of Object.keys(items)) {
        const item = items[k];

        if (item instanceof Object) {
          item.value = '';

          if (item.id !== 'cidade') {
            item.disabled = true;
          }

          setInputs(item, item.id);
        }
      }

      return items;
    }
  }, [ inputs, setInputs ]);

  // use effect
  useEffect(() => {
    if (posts.length > 0)
      getFilters(posts);
  }, [ posts ]);

  // render
  return (
    <FiltersContext.Provider value={{
      results,
      inputs,
      getFilters,
      onChange,
      onClearFilters
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
export default FiltersProvider;

/*

3 for (let index in temp) {
      const input: any = temp[index];

      if (input instanceof Object && input.id === id) {
        temp[index].value = value;

        if (value !== '') {
          getUpdateFilters(filterResult(input, results, inputs), id);
        }
      }
    }


switch (i) {
            case 'districts':
              filters['districts'].value = '';
              filters['districts'].disabled = false;

              filters['councils'].value = '';
              filters['councils'].disabled = true;

              filters['neighs'].value = '';
              filters['neighs'].disabled = true;

              filters['zones'].value = '';
              filters['zones'].disabled = true;
            break;
            case 'councils':
              filters['councils'].value = '';
              filters['councils'].disabled = false;

              filters['neighs'].value = '';
              filters['neighs'].disabled = true;

              filters['zones'].value = '';
              filters['zones'].disabled = true;
            break;
            case 'neighs':
              filters['neighs'].value = '';
              filters['neighs'].disabled = false;

              filters['zones'].value = '';
              filters['zones'].disabled = false;
            break;
            default:
              break;

  const [ inputs, setInputs ]: any = useState({
    cities: {
      id: 'cidade',
      value: '',
      options: [],
      label: 'Cidade',
      disabled: false
    },
    districts: {
      id: 'distrito',
      value: '',
      options: [],
      label: 'Distrito',
      disabled: true
    }, 
    councils: {
      id: 'conselho',
      value: '',
      options: [],
      label: 'Conselho',
      disabled: true
    },
    neighs: {
      id: 'freguesia',
      value: '',
      options: [],
      label: 'Freguesia',
      disabled: true
    },
    zones: {
      id: 'zona',
      value: '',
      options: [],
      label: 'Zona',
      disabled: true
    }
  });

  */