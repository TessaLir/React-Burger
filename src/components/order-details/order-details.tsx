import React from "react";

import svgDone from "./../../images/done.svg";

import styleClass from "./order-details.module.css";

const OrderDetails = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text text_type_digits-large">034536</h3>
            <p>идентификатор заказа</p>
            <img src={svgDone} style={{ height: '120px' }} alt="done" />
            <p>Ваш заказ начали готовить</p>
            <p>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

export default OrderDetails;