import React from "react";

import svgDone from "./../../images/done.svg";

import styleClass from "./order-details.module.css";

const OrderDetails = () => {
  return (
    <div className={`${styleClass.order} pt-20`}>
      <h3 className="text text_type_digits-large">034536</h3>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={svgDone} style={{ height: "120px" }} alt="done" />
      <p className="text text_type_main-small mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-small mt-2 mb-20">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;
