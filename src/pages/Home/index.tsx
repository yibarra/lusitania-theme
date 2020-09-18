import React, { FunctionComponent } from 'react';

import Webdoor from '../../components/Webdoor';

import { IHome } from './interfaces';

// home
const Home: FunctionComponent<IHome> = ({ getPostByCategoryName }) => {
  ////http://www.julianibarra.com/lusitania/wp-json/wp/v2/posts?filter=highlights&per_page=10

  // render
  return (
    <div className="home">
      <Webdoor category="highlights" getPostByCategoryName={getPostByCategoryName} />
    </div>
  );
};

export default Home;