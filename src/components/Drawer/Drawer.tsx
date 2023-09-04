import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';

export interface DrawerProps extends SpaceProps, LayoutProps {
  isOpen: boolean;
  onClose: () => void;
  header?: ReactNode;
  footer?: ReactNode;
  overlayBgColor?: string;
  children: ReactNode
}

const overlayFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const drawerSlide = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const drawerSlideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Overlay = styled.div<{ isOpen: boolean; bgColor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ bgColor }) => bgColor || 'rgba(0, 0, 0, 0.5)'};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${({ isOpen }) => (isOpen ? css`${overlayFade} 0.3s ease-in-out forwards` : 'none')};
`;

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  animation: ${({ isOpen }) =>
    isOpen ? css`${drawerSlide} 0.3s ease-in-out forwards` : css`${drawerSlideOut} 0.3s ease-in-out forwards`};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Header = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.div`
  padding: 12px;
`;

const Footer = styled.div`
  padding: 12px;
  border-top: 1px solid #ccc;
`;

const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  header,
  footer,
  overlayBgColor,
  children,
  ...rest
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'transform' && !isOpen) {
        onClose();
      }
    };

    if (drawerRef.current) {
      drawerRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (drawerRef.current) {
        drawerRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay isOpen={isOpen} bgColor={overlayBgColor} onClick={onClose} />
      <DrawerContainer isOpen={isOpen} ref={drawerRef} {...rest}>
        {header && <Header>{header}</Header>}
        <Content>{children}</Content>
        {footer && <Footer>{footer}</Footer>}
      </DrawerContainer>
    </>
  );
};

export default Drawer;