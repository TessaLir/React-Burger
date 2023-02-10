import React, { SetStateAction, useEffect, useState } from "react";
import { Root } from "react-dom/client";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../models/byrger-ingredient";
import BunView from "./bun-view/bun-view";

import styleClass from "./burger-constructor.module.css";
import OrderSection from "./order-section/order-section";

interface IProps {
  data: IBurderIngredient[];
  selectedItems: IBurderIngredient[];
  setSelectedItems: (value: SetStateAction<IBurderIngredient[]>) => void;
  portalRoot: Root | null;
}

const BurgerConstructor = ({
  data,
  selectedItems,
  setSelectedItems,
  portalRoot
}: IProps) => {
  const [fixedBun, setFixedBun] = useState<IBurderIngredient | null>(null);

  const {
    element,
    container,
    ingredients,
    attention_text,
    drawable_element,
    ingredients_inners,
  } = styleClass;

  useEffect(() => {
    if (!fixedBun) {
      setFixedBun(data[0]);
    }
  }, [fixedBun, data]);

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
        <BunView bunIngredient={bun} position="top" />

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

        <BunView bunIngredient={bun} position="bottom" />
      </section>

      <OrderSection selectedIngridient={selectedItems} bun={bun} portalRoot={portalRoot} />
    </article>
  );
};

export default BurgerConstructor;
