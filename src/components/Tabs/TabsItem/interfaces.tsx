export interface ITabsItem {
  item: any;
  index: number;
  active: boolean;
  setCurrent: (value: any) => any;
}