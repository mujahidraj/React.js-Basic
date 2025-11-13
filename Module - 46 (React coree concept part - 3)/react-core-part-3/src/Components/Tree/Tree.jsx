import React, { createContext } from 'react';
import GrandPa from './GrandPa';

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext('')

const Tree = () => {

   const asset = "I am Asset"
  return (
    <div>
      I am Main great grand pa
      <AssetContext.Provider value={asset}>
        <GrandPa></GrandPa>
      </AssetContext.Provider>
    </div>
  );
};

export default Tree;