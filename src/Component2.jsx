// SecondComponent.js
import React, { useContext } from 'react';
import DataContext from './DataContext';

const SecondComponent = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <p>Your Second component's content</p>
      <p>{data.message}</p>
    </div>
  );
};

export default SecondComponent;
