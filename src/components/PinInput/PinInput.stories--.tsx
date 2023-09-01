import React from 'react';
import PinInput from './PinInput';

const App: React.FC = () => {
  const handlePinChange = (pin: string) => {
    console.log('PIN:', pin);
  };

  return (
    <div>
      <PinInput length={4} onChange={handlePinChange} />
    </div>
  );
};

export default App;