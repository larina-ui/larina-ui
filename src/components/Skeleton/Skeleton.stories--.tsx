import React from 'react';
import Skeleton from './Skeleton';

const App: React.FC = () => {
  return (
    <div>
      <Skeleton width="200px" height="20px" borderRadius="4px" />
      <Skeleton
        width="300px"
        height="10px"
        borderRadius="2px"
        animationDuration="0.8s"
        backgroundColor="#ddd"
        animationTimingFunction="linear"
      />
    </div>
  );
};

export default App;