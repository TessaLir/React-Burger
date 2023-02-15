import { SetStateAction } from "react";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../../models/byrger-ingredient";

import styleClass from "./burger-ingredients-item.module.css";

interface IProps {
  item: IBurderIngredient;
  selectedCount: number;
  setSelectItem: (value: SetStateAction<IBurderIngredient | null>) => void;
}

const BurgerIngredientsItem = (props: IProps) => {
  const { selectedCount, item, setSelectItem } = props;
  const { _id, name, price, image } = item;

  return (
    <article
      className={`${styleClass.ingredient} mt-6 mb-10 ml-4 mr-3`}
      onClick={() => setSelectItem(item)}
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
