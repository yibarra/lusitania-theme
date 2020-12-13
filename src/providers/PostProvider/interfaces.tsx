import { ReactNode } from "react";
export interface IPostContext {
  getQuery: (query: string) => any;
  getPostByCategoryId: (type: string, id: number) => any;
  getPostByCategoryName: (type: string, value: string) => any;
  getPostById: (value: number) => any;
  getCustomPostById: (type: string, value: number) => any;
  posts: any[];
}
export interface IPostProvider {
  children: ReactNode;
  url: string;
}