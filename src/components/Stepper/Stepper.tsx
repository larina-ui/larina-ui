import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const StepperContainer = styled.div`
  display: flex;
`;

const StepButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 8px;
  font-weight: bold;
  border: none;
  background-color: ${({ active }) => (active ? '#333' : '#ccc')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  transition: background-color 0.3s ease-in-out;
  ${space};

  &:hover {
    background-color: ${({ active }) => (active ? '#333' : '#aaa')};
  }

  &:active {
    background-color: ${({ active }) => (active ? '#333' : '#888')};
  }
`;

const ActiveStepAnimation = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ active }) => (active ? '#333' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  z-index: -1;
  opacity: 0.5;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export interface StepperProps extends SpaceProps {
  steps: string[];
}

 const Stepper: FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <StepButton
          key={index}
          active={index === activeStep}
          onClick={() => handleClick(index)}
          mx={1}
        >
          {step}
        </StepButton>
      ))}
            <ActiveStepAnimation active={true} />

    </StepperContainer>
  );
};

export default Stepper;