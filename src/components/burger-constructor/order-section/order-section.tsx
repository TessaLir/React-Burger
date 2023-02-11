import React, { useState } from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../models/byrger-ingredient";
import OrderDetails from "../../order-details/order-details";
import Modal from "../../modal/modal";

import styleClass from "./order-section.module.css";

interface IProps {
  selectedIngridient: IBurderIngredient[];
  bun: IBurderIngredient;
}

const OrderSection = ({ selectedIngridient, bun }: IProps) => {
  const { payment, payment_currency } = styleClass;

  const [isOpenModal, setOpenModal] = useState(false);

  const modalKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  };

  return (
    <section className={`${payment} mt-10 pr-10`}>
      <div className={`${payment_currency} mr-10`}>
        <p className="text text_type_digits-default pr-2">
          {[...selectedIngridient, bun, bun].reduce(
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
        onClick={() => setOpenModal(true)}
      >
        Оформить заказ
      </Button>
      {isOpenModal && (
        <Modal
          onClose={() => setOpenModal(false)}
          closeByEscape={modalKeyDownListener}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default OrderSection;
