export interface ITabs {
  current: number;
  last?: number;
  onPrevNext: (value: any) => any;
  setCurrent: (value: any) => any;
  items: any;
}