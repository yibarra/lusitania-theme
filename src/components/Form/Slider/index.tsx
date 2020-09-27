import React, { FunctionComponent, memo } from 'react';
import Nouislider from 'react-nouislider';

import { ISlider } from './interfaces';

import './slider.scss';

// slider
const Slider: FunctionComponent<ISlider> = ({ label, min, connect, max, init, end, onChange }) => {
  // render
  return (
    <>
      <label className="input-label">{label}</label>
      <Nouislider
        range={{min, max}}
        connect={connect}
        start={[init, end]}
        onUpdate={onChange}
        tooltips />
    </>
  )
};

export default memo(Slider);