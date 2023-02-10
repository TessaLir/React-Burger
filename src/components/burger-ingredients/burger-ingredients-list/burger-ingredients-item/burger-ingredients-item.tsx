import { SetStateAction, useEffect } from "react";
import Modal from "../../../modal/modal";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { createRoot } from "react-dom/client";
import IBurderIngredient from "../../../../models/byrger-ingredient";
import IngredientDetails from "../../../ingredient-details/ingredient-details";

import styleClass from "./burger-ingredients-item.module.css";

interface IProps {
  item: IBurderIngredient;
  selectedCount: number;
  addElementInSelected: (item: IBurderIngredient) => void;
}

const BurgerIngredientsItem = (props: IProps) => {
  const { selectedCount, item, addElementInSelected } = props;
  const { _id, name, price, image } = item;

  const modalShow = () => {
    const portal = document.getElementById("portal");
    if (portal) {
      portal.innerText = "";
      const root = createRoot(portal);
      root.render(
        <Modal root={root}>
          <IngredientDetails
            item={item}
            addElementInSelected={addElementInSelected}
            root={root}
          />
        </Modal>
      );
    }
  };
  
  return (
    <article
      className={`${styleClass.ingredient} mt-6 mb-10 ml-4 mr-3`}
      onClick={modalShow}
    >
      <div className={`${styleClass.ingredient_top} pb-1 pl-4 pr-4`}>
        {selectedCount === 0 ? null : (
          <Counter count={selectedCount} size="default" extraClass="m1" />
        )}
        <img className={styleClass.ingredient_image} src={image} alt={_id} />
        <div className={styleClass.ingredient_price}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={styleClass.ingredient_name}>
        <p className="text text_type_main-small">{name}</p>
      </div>
    </article>
  );
};

export default BurgerIngredientsItem;
