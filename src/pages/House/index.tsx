import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { IHouse } from './interfaces';

import './house.scss';

// house
const House: FunctionComponent<IHouse> = ({ getCustomPostById }) => {
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
    <div className="house">
      {house && <>
        <h1>{house.title.rendered}</h1>
      </>}
    </div>
  );
};

export default House;