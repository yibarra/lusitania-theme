import React, { FunctionComponent, useEffect } from 'react';

import clamp from 'lodash-es/clamp';
import { useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import SliderBase from '../../Slider/Base';
import WebdoorInfo from '../WebdoorInfo';
import WebdoorItem from '../WebdoorItem';

import { IWebdoorContent } from './interfaces';

import './webdoor-content.scss';

// Webdoor content
const WebdoorContent: FunctionComponent<IWebdoorContent> = ({ current, items, last, onPrevNext, setCurrent }) => {
  // props set
  const [ props, set ] = useSprings(items.length, (i: any) => ({
    x: i * window.innerWidth,
    scale: 1,
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
      const scale: number = down ? 1 - distance / window.innerWidth / 2 : 1;
      return { x, scale, display: 'block' };
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
        const scale: number = 1;
  
        return { x, scale, display: 'block' };
      });
    };

    init();
  }, [ current, set ]);

  // render
  return (
    <>
      <WebdoorInfo current={current} last={last} onPrevNext={onPrevNext} items={items} />

      <div className="webdoor--content">
        {props.map(({ x, display, scale }, i) => (
          <WebdoorItem drag={drag} items={items} display={display} scale={scale} x={x} i={i} key={i} />))}
      </div>
    </>
  )
};

export default SliderBase(WebdoorContent);
