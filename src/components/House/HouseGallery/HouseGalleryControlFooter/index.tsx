import React, { FunctionComponent, memo, useCallback } from 'react';

import { IHouseGalleryControlFooter } from './interfaces';

import './house-gallery-control-footer.scss';

// house gallery control footer
const HouseGalleryControlFooter: FunctionComponent<IHouseGalleryControlFooter> = ({ current, count, setCurrent }) => {
  // buttons
  const buttons: any = useCallback((current: number, setCurrent: any) => {
    const elements: any[] = [];

    for (let i = 0; i < count; i++) {
      elements.push(<button className="btn-min" data-active={current === i} onClick={() => setCurrent(i)} key={i}></button>);
    }

    return elements;
  }, [ count ]);


  // render
  return (
    <div className="house--gallery--control--footer">{buttons(current, setCurrent)} </div>
  );
};

export default memo(HouseGalleryControlFooter);