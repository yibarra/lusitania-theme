export interface ISlider {
  label: string;
  connect: boolean;
  range: any;
  init: any[];
  onChange: (value: any) => any;
}