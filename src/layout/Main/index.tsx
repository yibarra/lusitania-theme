import React from 'react';
import MainProvider from '../../providers/MainProvider';

import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../../components/Loader';

import '../../styles/main.scss';

// main
const Main = () => {
  return (
    <MainProvider>
      <Loader />
      <Header />
      <Content any="tre" />
      <Footer />
    </MainProvider>
  );
};

export default Main;