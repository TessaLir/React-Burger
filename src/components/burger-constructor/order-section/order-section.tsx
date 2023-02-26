import React, { useState } from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IResponseOrderDetail from "../../../models/response-order-detail";
import OrderDetails from "../../order-details/order-details";
import Modal from "../../modal/modal";
import { fetchSendOrder } from "../../../api/burger-api";

import styleClass from "./order-section.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  isShowModal,
  selecteBun,
  selectedSelector,
} from "../../../services/selectors";
import { baseActionCreators } from "../../../services/action-creators";

const OrderSection = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(selectedSelector);
  const isOpenModal = useSelector(isShowModal);
  const bun = useSelector(selecteBun);

  const { payment, payment_currency } = styleClass;

  const [sendOrderErrorMessage, setSendOrderErrorMessage] = useState<
    string | null
  >(null);

  if (!bun) return null;

  const sendOrder = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    const apiData = {
      ingredients: [...selectedItems.map((el) => el._id), bun._id, bun._id],
    };

    fetchSendOrder(apiData)
      .then((data: IResponseOrderDetail) => {
        dispatch(baseActionCreators.setOrderDetail(data));
        dispatch(baseActionCreators.setShowModal(true));
      })
      .catch((error) => {
        setSendOrderErrorMessage(error.message);
        dispatch(baseActionCreators.setShowModal(true));
        // setHasError(true) // TODO тут потом будем использовать какой ни будь Redux для проброса состояния...
      });
  };

  return (
    <section className={`${payment} mt-10 pr-10`}>
      <div className={`${payment_currency} mr-10`}>
        <p className="text text_type_digits-default pr-2">
          {[...selectedItems, bun, bun].reduce(
            (summ, item) => summ + item.price,
            0
          )}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={sendOrder}>
        Оформить заказ
      </Button>
      {isOpenModal && (
        <Modal>
          {!sendOrderErrorMessage ? (
            <OrderDetails />
          ) : (
            <h3 className={styleClass.error}>
              Произошла ошибка: {sendOrderErrorMessage}
            </h3>
          )}
        </Modal>
      )}
    </section>
  );
};

export default OrderSection;
