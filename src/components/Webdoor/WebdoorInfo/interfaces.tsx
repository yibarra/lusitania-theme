export interface IWebdoorInfo {
  current: number;
  last: number;
  items: any [];
  onPrevNext: (value: any) => any;
  setCurrent: (value: any) => any;
}