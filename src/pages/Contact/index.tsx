import React, { FC, useEffect, memo, useState, useCallback } from 'react';
import parse from 'html-react-parser';

import ContactGallery from '../../components/ContactGallery';
import { default as FormContact } from '../../components/Form/Contact';
import UseFilterImage from '../../uses/UseFilterImage';

import { IContact } from './interfaces';

import './contact.scss';

// contact
const Contact: FC<IContact> = ({ getPostByCategoryName }) => {
  // state
  const [ items, setItems ]: any = useState([]);
  const { filterImages } = UseFilterImage();

  // load items
  const load = useCallback(async (category: string) => {
    const data = await getPostByCategoryName('houses', category);

    if (data) 
      setItems(data);
  }, [ getPostByCategoryName ]);

  // images
  const images: any = useCallback(() => {
    console.log(items);
    if (items instanceof Object === false) return false;
    const item = items[0];
    console.log(item);

    return parse(item.content?.rendered, {
      replace: ({ attribs, name, children }: any) => {
        if (!attribs) return null;
  
        if (attribs && (attribs.class === 'wp-block-gallery' || attribs.class === 'wp-block-image')) {
          return children;
        }
      }
    });
  }, [ items ]);

  // use effect
  useEffect(() => {
    load('highlights');
  }, [ load ]);

  // render
  return (
    <div className="contact">
      <ContactGallery items={filterImages(images)} />
      <FormContact />
    </div>
  );
};

export default memo(Contact);