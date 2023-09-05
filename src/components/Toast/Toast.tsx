import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const ToastContainer = styled.div<{ status: ToastStatus }>`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;

  ${(props) =>
    props.status === 'success' &&
    css`
      background-color: #28a745;
    `}

  ${(props) =>
    props.status === 'error' &&
    css`
      background-color: #dc3545;
    `}

  ${(props) =>
    props.status === 'warning' &&
    css`
      background-color: #ffc107;
    `}
`;

export interface ToastProps {
  status: ToastStatus;
  message: string;
  duration: number;
  closable: boolean;
  onClose?: () => void;
}

export type ToastStatus = 'success' | 'error' | 'warning';

export const Toast: FC<ToastProps> = ({ status, message, duration, closable, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return isVisible ? (
    <ToastContainer status={status}>
      {message}
      {closable && <button onClick={handleClose}>Close</button>}
    </ToastContainer>
  ) : null;
};