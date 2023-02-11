import React from "react";
import ReactDOM from "react-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";

import styleClass from "./modal.module.css";

interface IProps {
  children: any;
  onClose: () => void;
}

const portal = document.getElementById("portal");

const Modal = ({ children, onClose }: IProps) => {

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
