import { ReactNode } from "react";

export interface IPostContext {
  getPostByCategoryName: (type: string, value: string) => any;
  getPostById: (value: number) => any;
}

export interface IPostProvider {
  children: ReactNode
}