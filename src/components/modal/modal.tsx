import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";

import styleClass from "./modal.module.css";

interface IProps {
  children: any;
  onClose: () => void;
  closeByEscape?: ((e: KeyboardEvent) => void) | undefined;
}

const portal = document.getElementById("portal");

const Modal = ({ children, onClose, closeByEscape }: IProps) => {
  useEffect(() => {
    if (closeByEscape) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [closeByEscape]);

  if (!portal) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${styleClass.modal} p-10`}>
        <div className={styleClass.container}>
          <div className={styleClass.icon}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    </>,
    portal
  );
};

export default Modal;
