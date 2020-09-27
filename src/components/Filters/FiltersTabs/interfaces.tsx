export interface IFiltersTabs {
  items: any[];
  current: number;
  onPrevNext: (value: any) => any;
  setCurrent: (value: number) => void;
}