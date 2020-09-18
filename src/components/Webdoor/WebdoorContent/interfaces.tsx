export interface IWebdoorContent {
  current: number;
  items: any [];
  last: number;
  onPrevNext: (value: any) => any;
  setCurrent: (value: any) => any;
}