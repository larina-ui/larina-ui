import { useState } from 'react';
import type { ToastStatus } from './Toast';

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
};

interface Toast {
  id: string;
  status: ToastStatus;
  message: string;
  duration: number;
  closable: boolean;
}

export default useToast;