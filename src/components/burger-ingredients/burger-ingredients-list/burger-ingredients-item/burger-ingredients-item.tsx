import { useContext } from "react";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { SelectBunContext } from "../../../../services/app-context";
import IBurderIngredient from "../../../../models/byrger-ingredient";

import styleClass from "./burger-ingredients-item.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectedSelector } from "../../../../services/selectors";
import { baseActionCreators } from "../../../../services/action-creators";

interface IProps {
  item: IBurderIngredient;
}

const BurgerIngredientsItem = ({ item }: IProps) => {
  const { _id, name, price, image } = item;
  const dispatch = useDispatch();
  const selectedItems = useSelector(selectedSelector);

  const { fixedBun } = useContext(SelectBunContext);

  const selectedCount =
    fixedBun && fixedBun._id === item._id
      ? 2
      : selectedItems.filter((el) => el._id === _id).length;

  return (
    <article
      className={`${styleClass.ingredient} mt-6 mb-10 ml-4 mr-3`}
      onClick={() => dispatch(baseActionCreators.setSelectItem(item))}
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
