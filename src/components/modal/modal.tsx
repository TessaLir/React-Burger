import React from "react";
import ReactDOM from "react-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";
import styleClass from "./modal.module.css";

interface IProps {
  children: any;
}

const Modal = ({ children }: IProps) => {
  const onClose = () => {
    const portal = document.getElementById("portal");
    ReactDOM.render(<></>, portal);
  };

  return (
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
    </>
  );
};

export default Modal;
