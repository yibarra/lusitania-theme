import { ReactNode } from 'react';

export interface IFiltersContext {
  result: any[];
  inputs: any[];
  filters: any[];
  getFilters: (posts: any[]) => any;
  onChange: (value: any, id: any, inputs: any) => void;
}

export interface IFiltersProvider {
  children: ReactNode;
}