import React, { FunctionComponent, memo } from 'react';
import Nouislider from "nouislider-react";

import { ISlider } from './interfaces';

import "nouislider/distribute/nouislider.css";

import './slider.scss';

// slider
const Slider: FunctionComponent<ISlider> = ({ label, connect, init, range, onChange }) => {
  // render
  return (
    <>
      <label className="input-label">{label}</label>

      <div className="slider">
        <Nouislider
          range={range}
          connect={connect}
          start={init}
          onUpdate={(value: any) => onChange('')}
          tooltips />
      </div>
    </>
  )
};

export default memo(Slider);