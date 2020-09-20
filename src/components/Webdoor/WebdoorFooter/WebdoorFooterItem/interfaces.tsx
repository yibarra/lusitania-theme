export interface IWebdoorFooterItem {
  current: boolean;
  last: boolean;
  index: number;
  setCurrent?: (value: any) => any;
  rendered: any;
}