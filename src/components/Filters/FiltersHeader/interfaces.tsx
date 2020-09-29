export interface IFiltersHeader {
  items: any[];
  current: number;
  setCurrent: (value: any) => void;
  onClearInputs: (value: any) => any;
}