import React from 'react';
import MainProvider from '../../providers/MainProvider';

import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';

import '../../styles/main.scss';

// main
const Main = () => {
  return (
    <MainProvider>
      <Header />
        <Content any="tre" />
      <Footer />
    </MainProvider>
  );
};

export default Main;