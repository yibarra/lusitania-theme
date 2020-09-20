import React, { FunctionComponent, memo } from 'react';

import { IWebdoorSlogan } from './interfaces';

import './webdoor-slogan.scss';

// webdoor slogan
const WebdoorSlogan: FunctionComponent<IWebdoorSlogan> = () => {
  // render
  return (
    <div className="webdoor--slogan">
      <img className="image" src={`${process.env.PUBLIC_URL}/images/logo-main.svg`} alt="Lusitania" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus feugiat sed scelerisque porttitor. Pulvinar eros, hac consectetur cras commodo felis accumsan. Cursus imperdiet tellus, orci in. Vitae, non lectus luctus vel, netus volutpat augue elementum sagittis. Molestie leo dui amet orci. Maecenas viverra habitant vel morba.</p>
    </div>
  );
};

export default memo(WebdoorSlogan);