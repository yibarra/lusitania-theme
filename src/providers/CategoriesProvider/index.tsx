import React, { createContext, useState, FunctionComponent, useCallback, useEffect } from 'react';
import axios from 'axios';

import { ICategoriesContext, ICategoriesProvider } from './interfaces';

// Categories context
const CategoriesContext = createContext({} as ICategoriesContext);

// categories provider
const CategoriesProvider: FunctionComponent<ICategoriesProvider> = ({ children }) => {
  // state
  const [ categories, setCategories ] = useState([]);

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

  // use effect
  useEffect(() => {
    const items = async () => {
      const data: any = await axios.get(`categories`).then(({ data }) => data);

      if (data)
        setCategories(data);
    };

    items();
  }, []);

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

