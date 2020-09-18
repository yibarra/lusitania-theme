import { ReactNode } from "react";

export interface ICategoriesContext {
  getCategoryById: (value: any) => any;
  getCategoryByName: (value: any) => any;
  categories: any[];
}

export interface ICategoriesProvider {
  children: ReactNode
}