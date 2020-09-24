import React, { FunctionComponent, useEffect, useRef } from 'react';

import clamp from 'lodash-es/clamp';

import { useSprings, animated as a } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import SliderBase from '../../Slider/Base';
import CardGalleryControls from './CardGalleryControls';

import { ICardGallery } from './interfaces';

import './card-gallery.scss';

// card gallery
const CardGallery: FunctionComponent<ICardGallery> = ({ current, items, setCurrent, onPrevNext }) => {
  const element: any = useRef(null);

  // state
  const [ props, set ] = useSprings(items.length, (i: any) => ({
    x: i * window.innerWidth,
    display: 'block'
  })) || undefined;

  // drag
  const drag = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }: any) => {
    const { width }: any = element.current.getBoundingClientRect();

    if (down && distance > width / 2) {
      const value = clamp(current + (xDir > 0 ? -1 : 1), 0, items.length - 1);
      cancel(setCurrent(value));
    }
    
    set((i: any) => {
      if (i < current - 1 || i > current + 1) return { display: 'none' };

      const x: number = (i - current) * width + (down ? mx : 0);
      return { x, display: 'block' };
    });
  });

  // use effect
  useEffect(() => {
    const init = () => {
      const { width }: any = element.current.getBoundingClientRect();

      set((i) => {
        if (i < current - 1 || i > current + 1) {
          return { display: 'none' };
        }
  
        const x: any = (i - current) * width;
        return { x, display: 'block' };
      });
    };

    init();
  }, [ current, set ]);

  // render
  return (
    <div className="card--gallery" ref={element}>
      <CardGalleryControls
        current={current}
        items={items}
        onPrevNext={onPrevNext}
        setCurrent={setCurrent} />

      <div className="card--gallery--list">
        {props.map(({ x, display }: any, i) =>
          <a.div
            className="card--gallery--item"
            {...drag()}
            key={i}
            style={{ 
              display,
              transform: x.to((value: any) => `translate3d(${value}px,0,0)`) }}>
              {items[i]}
          </a.div>)}
      </div>
    </div>
  );
};

export default SliderBase(CardGallery);