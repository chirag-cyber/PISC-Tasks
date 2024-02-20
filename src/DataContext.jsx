import React, { createContext, useState } from 'react';

const DataContext = createContext();
 
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    message: 'Hello I am in first as well as Second Component !'
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
