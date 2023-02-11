import { SetStateAction, useState } from "react";

import IBurderIngredient from "../../../models/byrger-ingredient";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
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

  const [selectItem, setSelectItem] = useState<IBurderIngredient | null>(null);

  const addElementInSelected = (item: IBurderIngredient) => {
    setSelectedItems([...selectedItems, item]);
  };

  const modalKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectItem(null);
    }
    if (e.key === "Enter") {
      if (selectItem) {
        addElementInSelected(selectItem);
        setSelectItem(null);
      }
    }
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
            setSelectItem={setSelectItem}
          />
        ))}

        {selectItem && (
          <Modal
            onClose={() => setSelectItem(null)}
            closeByEscape={modalKeyDownListener}
          >
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
