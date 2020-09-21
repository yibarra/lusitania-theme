import React, { FunctionComponent, useEffect } from 'react';

import clamp from 'lodash-es/clamp';
import { useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import NumberText from '../../NumberText';
import SliderBase from '../../Slider/Base';
import WebdoorControls from '../WebdoorControls';
import WebdoorInfo from '../WebdoorInfo';
import WebdoorItem from '../WebdoorItem';
import WebdoorSlogan from '../WebdoorSlogan';

import { IWebdoorContent } from './interfaces';

import './webdoor-content.scss';

// Webdoor content
const WebdoorContent: FunctionComponent<IWebdoorContent> = ({ current, items, last, onPrevNext, setCurrent }) => {
  // props set
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
    <>
      <WebdoorSlogan />

      <WebdoorInfo
        current={current}
        last={last}
        onPrevNext={onPrevNext}
        setCurrent={setCurrent}
        items={items} />

      <div className="webdoor--content">
        {props.map(({ x, display }, i) => (
          <WebdoorItem 
            drag={drag} 
            items={items} 
            display={display}
            x={x} 
            i={i} 
            key={i} />))}
      </div>

      <WebdoorControls
        count={items.length}
        current={current}
        items={items}
        setCurrent={setCurrent}
        onPrevNext={onPrevNext} />

      <NumberText current={current} count={items.length} type={1} />
    </>
  )
};

export default SliderBase(WebdoorContent);
