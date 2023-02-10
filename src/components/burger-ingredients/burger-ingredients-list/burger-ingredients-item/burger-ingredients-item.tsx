import { createRoot, Root } from "react-dom/client";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../../models/byrger-ingredient";
import IngredientDetails from "../../../ingredient-details/ingredient-details";
import Modal from "../../../modal/modal";

import styleClass from "./burger-ingredients-item.module.css";

interface IProps {
  item: IBurderIngredient;
  selectedCount: number;
  addElementInSelected: (item: IBurderIngredient) => void;
  portalRoot: Root | null;
}

const BurgerIngredientsItem = (props: IProps) => {
  const { selectedCount, item, addElementInSelected, portalRoot } = props;
  const { _id, name, price, image } = item;

  const modalShow = () => {
    if (portalRoot) {
      portalRoot.render(
        <Modal root={portalRoot}>
          <IngredientDetails
            item={item}
            addElementInSelected={addElementInSelected}
            root={portalRoot}
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
