import React, { useState } from 'react';
import { DataProvider } from './DataContext';
import FirstComponent from './Component1';
import SecondComponent from './Component2';

const App = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <DataProvider>
      <div>
        <h1>App</h1>
        <button onClick={() => setShowFirst(true)}>Open First Component</button>
        <button onClick={() => setShowSecond(true)}>Open Second Component</button>
        {showFirst && <FirstComponent />}
        {showSecond && <SecondComponent />}
      </div>
    </DataProvider>
  );
};

export default App;
