import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '../components/ui/dialog';
import { ReactNode } from 'react';

export interface ModalProps {
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, trigger, children }) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </DialogContent>
  </Dialog>
);

export default Modal;
