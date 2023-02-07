import React, { useEffect, useState } from "react";

import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../models/byrger-ingredient";
import BunView from "./bun-view/bun-view";

import styleClass from "./burger-constructor.module.css";
import OrderSection from "./order-section/order-section";

interface IProps {
  data: IBurderIngredient[];
}

const BurgerConstructor = (props: IProps) => {
  const [fixedBun, setFixedBun] = useState<IBurderIngredient | null>(null);
  const [selectedIngridient, setSelectedIngridient] = useState<
    IBurderIngredient[]
  >([]);

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
      setFixedBun(props.data[0]);
    }
  }, [fixedBun, props.data]);

  // TODO возможно надо бы пробросить ошибку, или что то подобное.
  if (!fixedBun)
    return (
      <h3 className={`text text_type_main-large mb-5 ${attention_text}`}>
        что то не найдена булочка
      </h3>
    );

  const bun = props.data[0];
  const ingredientLength = selectedIngridient.length;

  return (
    <article className={`${container} pt-25 pl-4 pr-4`}>
      <section className={ingredients}>
        <BunView bunIngredient={bun} position="top" />

        <div className={ingredients_inners}>
          {selectedIngridient
            .slice(1, ingredientLength - 1)
            .map((item, index) => (
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
                />
              </section>
            ))}
        </div>

        <BunView bunIngredient={bun} position="bottom" />
      </section>

      <OrderSection selectedIngridient={selectedIngridient} bun={bun} />
    </article>
  );
};

export default BurgerConstructor;
