import React, { memo } from 'react';
import MainProvider from '../../providers/MainProvider';

import Content from '../Content';
import Header from '../Header';
import Loader from '../../components/Loader';

import '../../styles/main.scss';

// main
const Main = () => {
  return (
    <MainProvider>
      <Loader />
      <Header />
      <Content any="any" />
    </MainProvider>
  );
};

export default memo(Main);