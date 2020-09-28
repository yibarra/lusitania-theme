export interface IFiltersBody {
  current: number;
  items: any [];
  onChange: (value: any, id: any, items: any) => any;
}