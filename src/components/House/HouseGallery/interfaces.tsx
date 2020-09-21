export interface IHouseGallery {
  active: boolean;
  item: any;
  current: number;
  items: any[],
  setCurrent: (value: any) => any;
  onPrevNext: (value: any) => any;
}