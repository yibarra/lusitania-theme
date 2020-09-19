import { ReactNode } from 'react';

export interface ITagsContext {
  tags: any[];
  getTagById: (value: number) => any;
}

export interface ITagsProvider {
  children: ReactNode;
}