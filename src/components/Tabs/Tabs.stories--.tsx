import React from 'react';
import Tabs, { Tab } from './Tabs';

const App: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
    },
  ];

  return <Tabs tabs={tabs} animationDuration={500} easingFunction="ease-out" />
};

export default App;