import React, { useContext } from 'react';
import { AssetContext } from './Tree';

const Myself = () => {

  const asset = useContext(AssetContext)
  return (
    <div>
      {asset} and i am myself
    </div>
  );
};

export default Myself;