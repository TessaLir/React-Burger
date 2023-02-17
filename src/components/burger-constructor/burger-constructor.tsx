import React, { useContext } from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BunView from "./bun-view/bun-view";
import OrderSection from "./order-section/order-section";
import {
  DataContext,
  SelectBunContext,
  SelectedAllItemsContext,
} from "../../services/app-context";

import styleClass from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const data = useContext(DataContext);
  const { selectedItems, setSelectedItems } = useContext(
    SelectedAllItemsContext
  );
  const { fixedBun } = useContext(SelectBunContext);

  const {
    element,
    container,
    ingredients,
    attention_text,
    drawable_element,
    ingredients_inners,
  } = styleClass;

  const removeSelectedItem = (index: number) => {
    setSelectedItems([
      ...selectedItems.slice(0, index),
      ...selectedItems.slice(index + 1),
    ]);
  };

  // TODO возможно надо бы пробросить ошибку, или что то подобное.
  if (!fixedBun)
    return (
      <h3 className={`text text_type_main-large mb-5 ${attention_text}`}>
        что то не найдена булочка
      </h3>
    );

  const bun = data[0];

  return (
    <article className={`${container} pt-25 pl-4 pr-4`}>
      <section className={ingredients}>
        <BunView position="top" />

        <div className={ingredients_inners}>
          {selectedItems.map((item, index) => (
            <section
              key={`${item._id}-${index}`}
              className={`${drawable_element} pr-4`}
            >
              <DragIcon type="primary" />
              <ConstructorElement
                extraClass={element}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => {
                  removeSelectedItem(index);
                }}
              />
            </section>
          ))}
        </div>

        <BunView position="bottom" />
      </section>

      <OrderSection />
    </article>
  );
};

export default BurgerConstructor;
