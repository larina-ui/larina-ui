import React from 'react';
import Kbd from './Kbd';

const App: React.FC = () => {
  return (
    <div>
      <h1>Kbd Component Example</h1>
      <p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.</p>
    </div>
  );
};

export default App;