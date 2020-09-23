export interface ICategoryItem {
  active: boolean;
  category: any;
  index: number;
  getPostByCategoryId: (typePost: string, id: number) => any;
  setActive: (value: any) => any;
}