export interface IFiltersHeader {
  items: any[];
  current: number;
  countFilters: (value?: string) => any;
  setCurrent: (value: any) => void;
  onClearFilters: () => any;
}