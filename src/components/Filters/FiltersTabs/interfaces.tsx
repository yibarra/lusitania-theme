export interface IFiltersTabs {
  items: any[];
  current: number;
  onChange: (value: any, id: any, items: any) => any;
  setCurrent: (value: number) => void;
}