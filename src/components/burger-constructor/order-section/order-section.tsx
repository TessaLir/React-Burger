import React, { useContext, useState } from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  SelectBunContext,
  SelectedAllItemsContext,
} from "../../../services/app-context";
import OrderDetails from "../../order-details/order-details";
import Modal from "../../modal/modal";

import styleClass from "./order-section.module.css";

const OrderSection = () => {
  const { payment, payment_currency } = styleClass;
  const { selectedItems } = useContext(SelectedAllItemsContext);
  const { fixedBun: bun } = useContext(SelectBunContext);

  const [isOpenModal, setOpenModal] = useState(false);

  if (!bun) return null;

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
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => setOpenModal(true)}
      >
        Оформить заказ
      </Button>
      {isOpenModal && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default OrderSection;
