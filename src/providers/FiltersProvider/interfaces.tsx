import { ReactNode } from 'react';

export interface IFiltersContext {
  filters: any[];
  getFilters: (posts: any[]) => any;
  getFiltersQuery: (values: any[]) => any;
}

export interface IFiltersProvider {
  children: ReactNode;
}