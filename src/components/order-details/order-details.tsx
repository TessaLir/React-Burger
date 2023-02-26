import React from "react";
import { useSelector } from "react-redux/es/exports";
import { orderDetailSelector } from "../../services/selectors";

import svgDone from "./../../images/done.svg";

import styleClass from "./order-details.module.css";

const OrderDetails = () => {
  const orderDetail = useSelector(orderDetailSelector);

  if (!orderDetail) return null;

  return (
    <div className={`${styleClass.order} pt-20`}>
      <h3 className="text text_type_digits-large">
        {orderDetail.order.number}
      </h3>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className={`${styleClass.image} mt-15`} src={svgDone} alt="done" />
      <p className="text text_type_main-small mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small mt-2 mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
