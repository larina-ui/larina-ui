import React from 'react';
import Stack from './Stack';

const App: React.FC = () => {
  const getAdditionalProps = (index: number, child: React.ReactNode) => {
    if (index === 1) {
      return { active: true };
    } else if (index === 2) {
      return { style: { fontWeight: 'bold' } };
    } else {
      return {};
    }
  };

  return (
    <Stack direction="vertical" spacing={20} additionalProps={getAdditionalProps}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  );
};

export default App;