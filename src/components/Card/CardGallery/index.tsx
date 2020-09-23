import React, { FunctionComponent } from 'react';

import SliderBase from '../../Slider/Base';

import { ICardGallery } from './interfaces';

import './card-gallery.scss';

// card gallery
const CardGallery: FunctionComponent<ICardGallery> = ({ current }) => {
  return (
    <div className="card--gallery">
      
    </div>
  );
};

export default SliderBase(CardGallery);