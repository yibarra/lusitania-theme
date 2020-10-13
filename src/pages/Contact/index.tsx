import React, { FC, useEffect, memo, useState, useCallback } from 'react';

import { default as FormContact } from '../../components/Form/Contact';

import { IContact } from './interfaces';

import './contact.scss';

// contact
const Contact: FC<IContact> = ({ getPostByCategoryName }) => {
  // state
  const [ items, setItems ] = useState([]);

  // load items
  const load = useCallback(async (category: string) => {
    const data = await getPostByCategoryName('houses', category);

    if (data) 
      setItems(data);
  }, [ getPostByCategoryName ]);

  // use effect
  useEffect(() => {
    load('highlights');
  }, [ load ]);

  // render
  return (
    <div className="contact">
      <FormContact />
    </div>
  );
};

export default memo(Contact);