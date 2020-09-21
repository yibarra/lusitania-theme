import React, { FunctionComponent, useEffect } from 'react';
import clamp from 'lodash-es/clamp';

import { useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import HouseGalleryItem from './HouseGalleryItem';
import HouseGalleryControl from './HouseGalleryControl';
import HouseGalleryControlFooter from './HouseGalleryControlFooter';
import HouseGalleryNextPrev from './HouseGalleryNextPrev';
import NumberText from '../../NumberText';
import SliderBase from '../../Slider/Base';

import { IHouseGallery } from './interfaces';

import './house-gallery.scss';

// house gallery
const HouseGallery: FunctionComponent<IHouseGallery> = ({ active, current, items, setCurrent, item, onPrevNext }) => {
  // state
  const [ props, set ] = useSprings(items.length, (i: any) => ({
    x: i * window.innerWidth,
    display: 'block'
  })) || undefined;

  // drag
  const drag = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }: any) => {
    if (down && distance > window.innerWidth / 2) {
      const value = clamp(current + (xDir > 0 ? -1 : 1), 0, items.length - 1);
      cancel(setCurrent(value));
    }
    
    set((i: any) => {
      if (i < current - 1 || i > current + 1) return { display: 'none' };

      const x: number = (i - current) * window.innerWidth + (down ? mx : 0);
      return { x, display: 'block' };
    });
  });

  // use effect
  useEffect(() => {
    const init = () => {
      set((i) => {
        if (i < current - 1 || i > current + 1) {
          return { display: 'none' };
        }
  
        const x: any = (i - current) * window.innerWidth;
        return { x, display: 'block' };
      });
    };

    init();
  }, [ current, set ]);

  // render
  return (
    <div className="house--gallery">
      <div className="house--gallery--content">
        {props.map(({ x, display }, i) => (
          <HouseGalleryItem
            drag={drag}
            display={display}
            items={items}
            i={i}
            x={x} 
            key={i} />))}
      </div>

      <HouseGalleryControl active={active} current={current} count={items.length - 1} onPrevNext={onPrevNext} />
      <HouseGalleryNextPrev current={current} items={items} />
      <HouseGalleryControlFooter current={current} count={items.length - 1} setCurrent={setCurrent} />

      <NumberText current={current} count={items.length - 1} type={1} />
    </div>
  );
};

export default SliderBase(HouseGallery);