export interface ISlider {
  label: string;
  min: number;
  connect: boolean;
  max: number;
  init: number;
  end: number;
  onChange: (value: any) => any;
}