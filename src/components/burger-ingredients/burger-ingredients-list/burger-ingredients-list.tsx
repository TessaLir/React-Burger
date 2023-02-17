import { useContext, useState } from "react";

import IBurderIngredient from "../../../models/byrger-ingredient";
import ITabItem from "../../../models/tab-item";
import { DataContext, SelectItemContext } from "../../../services/app-context";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";

import styleClass from "./burger-ingredients-list.module.css";

interface IProps {
  tab: ITabItem;
}

const BurgerIngredientsList = ({ tab }: IProps) => {
  const data = useContext(DataContext).filter((el) => el.type === tab.key);

  const [selectItem, setSelectItem] = useState<IBurderIngredient | null>(null);

  return (
    <SelectItemContext.Provider
      value={{ selectItem: selectItem, setSelectItem: setSelectItem }}
    >
      <article>
        <h3 className="text text_type_main-large mb-5">{tab.text}</h3>
        <section className={styleClass.list}>
          {data.map((item) => (
            <BurgerIngredientsItem key={item._id} item={item} />
          ))}

          {selectItem && (
            <Modal>
              <IngredientDetails />
            </Modal>
          )}
        </section>
      </article>
    </SelectItemContext.Provider>
  );
};

export default BurgerIngredientsList;
