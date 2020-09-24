export interface ICardGallery {
  current: number;
  items: any [];
  onPrevNext: (value: string) => any;
  setCurrent: (value: any) => any;
}