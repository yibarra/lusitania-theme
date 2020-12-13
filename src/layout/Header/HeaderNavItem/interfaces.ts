import { ReactNode } from "react";

export interface IHeaderNavItem {
  activeClassName?: string;
  children?: ReactNode;
  className?: string;
  exact?: boolean;
  text?: string;
  to: string;
}