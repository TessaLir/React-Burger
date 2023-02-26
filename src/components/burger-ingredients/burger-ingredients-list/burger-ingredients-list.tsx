import { useMemo, useState } from "react";
import { useSelector } from "react-redux/es/exports";

import IBurderIngredient from "../../../models/byrger-ingredient";
import ITabItem from "../../../models/tab-item";
import { SelectItemContext } from "../../../services/app-context";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import { dataSelector } from "../../../services/selectors";
import Modal from "../../modal/modal";

import styleClass from "./burger-ingredients-list.module.css";

interface IProps {
  tab: ITabItem;
}

const BurgerIngredientsList = ({ tab }: IProps) => {
  const data = useSelector(dataSelector);

  const [selectItem, setSelectItem] = useState<IBurderIngredient | null>(null);

  const contextIngridientItems = useMemo(() => {
    return { selectItem, setSelectItem };
  }, [selectItem, setSelectItem]);

  return (
    <SelectItemContext.Provider value={contextIngridientItems}>
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
