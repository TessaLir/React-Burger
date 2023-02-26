import React, { useCallback, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { ShowModal } from "../../services/app-context";

import styleClass from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selecteItem } from "../../services/selectors";
import { baseActionCreators } from "../../services/action-creators";

interface IProps {
  children: any;
}

const portal = document.getElementById("portal");

const Modal = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const selectItem = useSelector(selecteItem);

  // const { selectItem, setSelectItem } = useContext(SelectItemContext);
  const { toggleShowModal } = useContext(ShowModal);
  const onClose = useCallback(() => {
    // if (selectItem) {
      dispatch(baseActionCreators.setSelectItem(null));
    // } else {
    //   toggleShowModal(false);
    // }
  }, [dispatch, selectItem, toggleShowModal]);

  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (closeByEscape) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [onClose]);

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
