import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease;
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent isOpen={isOpen}>
        {children}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;