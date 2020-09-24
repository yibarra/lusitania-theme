export interface ICardGalleryControls {
  current: number;
  items: any[];
  onPrevNext: (value: string) => any;
  setCurrent: (value: number) => any; 
}