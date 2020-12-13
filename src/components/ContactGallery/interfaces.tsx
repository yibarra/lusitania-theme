export interface IContactGallery {
  current: number;
  items: any[],
  setCurrent: (value: any) => any;
  onPrevNext: (value: any) => any;
}