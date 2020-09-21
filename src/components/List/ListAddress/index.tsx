import React, { FunctionComponent, memo } from 'react';

import { IListAddress } from './interfaces';

import './list-address.scss';

// webdoor info address
const ListAddress: FunctionComponent<IListAddress> = ({ item: { acf } }) => {
  const { cidade, distrito } = acf;

  // render
  return (
    <div className="list--address">
      <p><strong>{distrito}</strong>, {cidade}</p>
    </div>
  );
};

export default memo(ListAddress);