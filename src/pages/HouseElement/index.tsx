import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import House from '../../components/House';

import { IHousePage } from './interfaces';

import './house-page.scss';

// house
const HousePage: FunctionComponent<IHousePage> = ({ getCustomPostById }) => {
  const { id }: any = useParams(); // params
  const [ house, setHouse ]: any = useState(null);

  // use effect
  useEffect(() => {
    const getHouse = async () => {
      const data = await getCustomPostById('houses', id);

      if (data)
        setHouse(data);
    };
    
    getHouse();
  }, [ id, getCustomPostById ]);

  // render
  return (
    <div className="house-page">
      {house && <House item={house} />}
    </div>
  );
};

export default memo(HousePage);