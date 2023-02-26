import { useSelector } from "react-redux/es/exports";

import ITabItem from "../../../models/tab-item";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import { dataSelector, selecteItem } from "../../../services/selectors";
import Modal from "../../modal/modal";

import styleClass from "./burger-ingredients-list.module.css";

interface IProps {
  tab: ITabItem;
}

const BurgerIngredientsList = ({ tab }: IProps) => {
  const data = useSelector(dataSelector);
  const selectItem = useSelector(selecteItem);

  return (
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
  );
};

export default BurgerIngredientsList;
