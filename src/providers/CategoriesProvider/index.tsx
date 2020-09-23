import React, { createContext, useState, FunctionComponent, useCallback, useEffect } from 'react';
import axios from 'axios';

import UseLocalStorage from '../../uses/UseLocalStorage';

import { ICategoriesContext, ICategoriesProvider } from './interfaces';

// time
const time: any = process.env.REACT_APP_LOCALSTORAGE_TIME || 1;

// Categories context
const CategoriesContext = createContext({} as ICategoriesContext);

// categories provider
const CategoriesProvider: FunctionComponent<ICategoriesProvider> = ({ children }) => {
  const localCategoriesIndex: string = 'lusitania_theme_categories';
  const { checkHours, localStorageItem, setValue, setValueFunction }: any = 
    UseLocalStorage(localCategoriesIndex, { items: [], date: Date.now() });

  // state
  const [ categories, setCategories ]: any = useState({ items: [], date: Date.now() });

  // get category by name
  const getCategoryByName = useCallback((nameCategory: string) => {
    if (!categories.length) return false;

    return categories.filter(({ name }: any) => name === nameCategory)[0];
  }, [ categories ]);

  // get categories
  const getCategoryById = useCallback((idCategory: number) => {
    if (!categories.length) return false;

    return categories.filter(({ id }: any) => id === idCategory)[0];
  }, [ categories ]);

  // get categories
  const getCategories = useCallback((setValue: any, setValueFunction: any, setCategories: any) => {
    return axios.get(`/categories`)
      .then(({ data }) => data)
      .then(items =>
        setValue(localCategoriesIndex, { items, date: Date.now() }, setValueFunction).then(() => setCategories(items)));
  }, []);

  // load
  const load = useCallback((setValue, setValueFunction) => {
    const { items, date }: any = localStorageItem;
    
    if ((items && items.length > 0) && (checkHours(date) < time)) {
      setCategories({ items, date });
    } else {
      getCategories(setValue, setValueFunction, setCategories);
    }
  }, [ localStorageItem, setCategories, getCategories, checkHours ]);

  // use effect
  useEffect(() => {
    load(setValue, setValueFunction);
  }, [ load, setValue, setValueFunction ]);

  // render
  return (
    <CategoriesContext.Provider value={{
      getCategoryById,
      getCategoryByName,
      categories
    }}>
      {children}
    </CategoriesContext.Provider>
  )
};

export { CategoriesProvider, CategoriesContext };
export default CategoriesProvider;

