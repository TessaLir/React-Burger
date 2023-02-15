import { useContext, useState } from "react";

import IBurderIngredient from "../../../models/byrger-ingredient";
import { SelectedAllItemsContext } from "../../../services/app-context";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";

import styleClass from "./burger-ingredients-list.module.css";

interface IProps {
  title: string;
  data: IBurderIngredient[];
}

const BurgerIngredientsList = (props: IProps) => {
  const { data, title } = props;
  const { selectedItems, setSelectedItems } = useContext(SelectedAllItemsContext);
  const [selectItem, setSelectItem] = useState<IBurderIngredient | null>(null);

  const addElementInSelected = (item: IBurderIngredient) => {
    setSelectedItems([...selectedItems, item]);
  };

  const getItemCountWithId = (id: string) => {
    return selectedItems.filter((el) => el._id === id).length;
  };

  return (
    <article>
      <h3 className="text text_type_main-large mb-5">{title}</h3>
      <section className={styleClass.list}>
        {data.map((item) => (
          <BurgerIngredientsItem
            key={item._id}
            item={item}
            selectedCount={getItemCountWithId(item._id)}
            setSelectItem={setSelectItem}
          />
        ))}

        {selectItem && (
          <Modal onClose={() => setSelectItem(null)}>
            <IngredientDetails
              item={selectItem}
              addElementInSelected={addElementInSelected}
              onCloseModal={() => setSelectItem(null)}
            />
          </Modal>
        )}
      </section>
    </article>
  );
};

export default BurgerIngredientsList;
