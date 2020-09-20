export interface IWebdoorControls {
  count: number;
  current: number;
  onPrevNext: (value: any) => any;
  setCurrent: (value: any) => any;
  items: any [];
};