import React, { FunctionComponent, memo } from 'react';
import Nouislider from 'react-nouislider';

import { ISlider } from './interfaces';

import './slider.scss';

// slider
const Slider: FunctionComponent<ISlider> = ({ label, connect, init, range, onChange }) => {
  // render
  return (
    <>
      <label className="input-label">{label}</label>
      <Nouislider
        range={range}
        connect={connect}
        start={init}
        onUpdate={(value: any) => onChange('')}
        tooltips />
    </>
  )
};

export default memo(Slider);