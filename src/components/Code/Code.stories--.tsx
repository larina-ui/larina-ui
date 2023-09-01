import React from 'react';
import Code from './Code';

const App: React.FC = () => {
  return (
    <div>
      <h1>Code Component Example</h1>
      <Code>{`console.log('Hello, World!');`}</Code>
    </div>
  );
};

export default App;