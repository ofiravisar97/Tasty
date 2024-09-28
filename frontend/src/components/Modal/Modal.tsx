import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div
      className="bg-opacity-30 bg-black fixed top-0 left-0 w-screen h-screen z-20"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Modal;
