import React from "react";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../models/byrger-ingredient";
import InfoItem from "./info-item/info-item";

import styleClass from "./ingredient-details.module.css";

interface IProps {
  item: IBurderIngredient;
  addElementInSelected: (item: IBurderIngredient) => void;
  onCloseModal: () => void;
}

const IngredientDetails = ({
  item,
  addElementInSelected,
  onCloseModal,
}: IProps) => {
  const addIngredientInBoorger = () => {
    addElementInSelected(item);
    onCloseModal();
  };

  return (
    <div className={`${styleClass.info}`}>
      <h2 className={`${styleClass.title} text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <img className={styleClass.image} src={item.image} alt="ingredient" />
      <h3 className={`${styleClass.name} text text_type_main-medium`}>
        {item.name}
      </h3>
      <ul className={`${styleClass.detail} mb-10`}>
        <InfoItem title="Калории,ккал" value={item.calories} />
        <InfoItem title="Белки, г" value={item.proteins} />
        <InfoItem title="Жиры, г" value={item.fat} />
        <InfoItem title="Углеводы, г" value={item.carbohydrates} />
      </ul>

      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={addIngredientInBoorger}
      >
        Добавить ингридиент в заказ
      </Button>
    </div>
  );
};

export default IngredientDetails;
