import React, { useEffect } from "react";
import { createRoot, Root, RootOptions } from "react-dom/client";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";
import styleClass from "./modal.module.css";

interface IProps {
  children: any;
  root: Root;
}

const Modal = ({ children, root }: IProps) => {
  const onClose = () => {
    root.render(<></>);
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
