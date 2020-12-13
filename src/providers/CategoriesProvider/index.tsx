import React, { createContext, useCallback, FC } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import { ICategoriesContext, ICategoriesProvider } from './interfaces';

// api
const api = (url: string) => axios.get(url).then(({ data }) => data);

// Categories context
const CategoriesContext = createContext({} as ICategoriesContext);

// categories provider
const CategoriesProvider: FC<ICategoriesProvider> = ({ children, url }) => {
  const { data }: any = useSWR<[any]>(url, api);

  // get category by name
  const getCategoryByName = useCallback((nameCategory: string) => {
    if (!data.length) return false;

    return data.filter(({ name }: any) => name === nameCategory)[0];
  }, [ data ]);

  // get categories
  const getCategoryById = useCallback((idCategory: number) => {
    if (!data.length) return false;

    return data.filter(({ id }: any) => id === idCategory)[0];
  }, [ data ]);

  // render
  return (
    <CategoriesContext.Provider value={{
      getCategoryById,
      getCategoryByName,
      categories: data
    }}>
      {children}
    </CategoriesContext.Provider>
  )
};

export { CategoriesProvider, CategoriesContext };
export default CategoriesProvider;

