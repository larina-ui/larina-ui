import React from 'react';
import Tooltip from './Tooltip';

const App: React.FC = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip text="Another tooltip">
        <span>Hover over me</span>
      </Tooltip>
    </div>
  );
};

export default App;