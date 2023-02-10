import React from "react";
import { createRoot } from "react-dom/client";

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

  const modalShow = () => {
    const portal = document.getElementById("portal");
    if (portal) {
      const root = createRoot(portal);
      root.render(
        <Modal root={root}>
          <OrderDetails />
        </Modal>
      );
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
      <Button htmlType="button" type="primary" size="large" onClick={modalShow}>
        Оформить заказ
      </Button>
    </section>
  );
};

export default OrderSection;
