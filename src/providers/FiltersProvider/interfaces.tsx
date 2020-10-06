import { ReactNode } from 'react';

export interface IFiltersContext {
  results: any[];
  inputs: any[];
  getFilters: (posts: any[]) => any;
  onChange: (value: any, id: any, inputs: any) => void;
  onClearFilters: (value: any) => any;
}

export interface IFiltersProvider {
  children: ReactNode;
}