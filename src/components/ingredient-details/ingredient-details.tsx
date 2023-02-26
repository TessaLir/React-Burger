import React, { useContext } from "react";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import IBurderIngredient from "../../models/byrger-ingredient";
import InfoItem from "./info-item/info-item";

import styleClass from "./ingredient-details.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { baseActionCreators } from "../../services/action-creators";
import { selecteItem } from "../../services/selectors";

const IngredientDetails = () => {
  const dispatch = useDispatch();
  const item = useSelector(selecteItem);

  // const { setFixedBun } = useContext(SelectBunContext);

  const addElementInSelected = (item: IBurderIngredient) => {
    if (item.type === "bun") {
      dispatch(baseActionCreators.setSelectBun(item))
    } else {
      dispatch(baseActionCreators.addInSelectedItems(item));
    }
  };

  if (!item) return null;

  const addIngredientInBoorger = () => {
    addElementInSelected(item);
    dispatch(baseActionCreators.setSelectItem(null));
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
