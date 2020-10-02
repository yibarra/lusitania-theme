export interface IFiltersBody {
  filters: any[];
  current: number;
  items: any [];
  onChange: (value: any, id: any, items: any) => any;
}