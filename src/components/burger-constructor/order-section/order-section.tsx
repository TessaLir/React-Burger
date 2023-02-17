import React, { useContext, useState } from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  OrderDetailsContext,
  SelectBunContext,
  SelectedAllItemsContext,
  ShowModal,
} from "../../../services/app-context";
import IResponseOrderDetail from "../../../models/response-order-detail";
import OrderDetails from "../../order-details/order-details";
import Modal from "../../modal/modal";
import { fetchSendOrder } from "../../../api/burger-api";

import styleClass from "./order-section.module.css";

const OrderSection = () => {
  const { payment, payment_currency } = styleClass;
  const { selectedItems } = useContext(SelectedAllItemsContext);
  const { fixedBun: bun } = useContext(SelectBunContext);
  const { setOrderDetail } = useContext(OrderDetailsContext);

  const [isOpenModal, setOpenModal] = useState(false);
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
        setOrderDetail(data);
        setOpenModal(true);
      })
      .catch((error) => {
        setSendOrderErrorMessage(error.message);
        setOpenModal(true);
        // setHasError(true) // TODO тут потом будем использовать какой ни будь Redux для проброса состояния...
      });
  };

  return (
    <section className={`${payment} mt-10 pr-10`}>
      <ShowModal.Provider
        value={{ isShowModal: isOpenModal, toggleShowModal: setOpenModal }}
      >
        <div className={`${payment_currency} mr-10`}>
          <p className="text text_type_digits-default pr-2">
            {[...selectedItems, bun, bun].reduce(
              (summ, item) => summ + item.price,
              0
            )}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={sendOrder}
        >
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
      </ShowModal.Provider>
    </section>
  );
};

export default OrderSection;
