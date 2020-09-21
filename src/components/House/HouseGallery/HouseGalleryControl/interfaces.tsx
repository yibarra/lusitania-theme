export interface IHouseGalleryControl {
  active: boolean;
  current: number;
  count: number;
  onPrevNext: (value: any) => any;
}