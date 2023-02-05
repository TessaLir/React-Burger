import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../../models/byrger-ingredient";

import styleClass from "./burger-ingredients-item.module.css";

interface IProps {
  item: IBurderIngredient;
}

const BurgerIngredientsItem = (props: IProps) => {
  const hasCounter: string[] = [
    "60666c42cc7b410027a1a9b1",
    "60666c42cc7b410027a1a9ba",
    "60666c42cc7b410027a1a9b9",
  ];

  const { _id, name, price, image } = props.item;

  return (
    <article className={`${styleClass.ingredient} mt-6 mb-10 ml-4 mr-3`}>
      <div className={`${styleClass.ingredient_top} pb-1 pl-4 pr-4`}>
        {!hasCounter.includes(_id) ? null : (
          <Counter count={1} size="default" extraClass="m1" />
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
