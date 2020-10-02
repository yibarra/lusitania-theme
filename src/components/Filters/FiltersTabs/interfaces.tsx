export interface IFiltersTabs {
  filters: any[];
  items: any[];
  current: number;
  onChange: (value: any, id: any, items: any) => any;
  setCurrent: (value: number) => void;
  onClearInputs: (value: any) => any;
}