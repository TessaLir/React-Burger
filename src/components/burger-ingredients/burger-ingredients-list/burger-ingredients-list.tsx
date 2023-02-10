import { SetStateAction } from "react";
import IBurderIngredient from "../../../models/byrger-ingredient";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";

import styleClass from "./burger-ingredients-list.module.css";

interface IProps {
  title: string;
  data: IBurderIngredient[];
  selectedItems: IBurderIngredient[];
  setSelectedItems: (value: SetStateAction<IBurderIngredient[]>) => void;
}

const BurgerIngredientsList = (props: IProps) => {
  const { data, title, selectedItems, setSelectedItems } = props;

  const addElementInSelected = (item: IBurderIngredient) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <article>
      <h3 className="text text_type_main-large mb-5">{title}</h3>
      <section className={styleClass.list}>
        {data.map((item) => (
          <BurgerIngredientsItem
            key={item._id}
            item={item}
            selectedCount={
              selectedItems.filter((el) => el._id === item._id).length
            }
            addElementInSelected={addElementInSelected}
          />
        ))}
      </section>
    </article>
  );
};

export default BurgerIngredientsList;
