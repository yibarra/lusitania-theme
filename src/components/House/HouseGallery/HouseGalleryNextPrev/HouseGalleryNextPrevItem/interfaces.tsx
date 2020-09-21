import { ReactNode } from "react";

export interface IHouseGalleryNextPrevItem {
  current: boolean;
  last: boolean;
  index: number;
  children: ReactNode;
}