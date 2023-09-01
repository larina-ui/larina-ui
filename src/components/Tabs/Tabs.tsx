import React, { useState } from 'react';
import styled from 'styled-components';

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  animationDuration?: number;
  easingFunction?: string;
};

const TabsContainer = styled.div`
  width: 100%;
`;

const TabsHeader = styled.div`
  display: flex;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background-color: ${(props) => (props.active ? 'lightblue' : 'transparent')};
  border: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const TabsContent = styled.div<{ animate: boolean; duration: number; easing: string }>`
  opacity: ${(props) => (props.animate ? 1 : 0)};
  height: ${(props) => (props.animate ? 'auto' : 0)};
  overflow: hidden;
  transition: opacity ${(props) => props.duration}ms ${(props) => props.easing},
    height ${(props) => props.duration}ms ${(props) => props.easing};
`;

const Tabs: React.FC<TabsProps> = ({ tabs, animationDuration = 300, easingFunction = 'ease-in-out' }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [animate, setAnimate] = useState(false);

  const handleTabClick = (tabId: string) => {
    if (tabId !== activeTab) {
      setAnimate(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setAnimate(false);
      }, animationDuration); // Wait for the animation to complete before updating the active tab
    }
  };

  return (
    <TabsContainer>
      <TabsHeader>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsHeader>
      <TabsContent animate={animate} duration={animationDuration} easing={easingFunction}>
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </TabsContent>
    </TabsContainer>
  );
};

export default Tabs;