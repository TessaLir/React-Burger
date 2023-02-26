import React, { useContext } from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BunView from "./bun-view/bun-view";
import OrderSection from "./order-section/order-section";
import { SelectBunContext } from "../../services/app-context";

import styleClass from "./burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectedSelector } from "../../services/selectors";
import { baseActionCreators } from "../../services/action-creators";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(selectedSelector);

  const { fixedBun } = useContext(SelectBunContext);

  const {
    element,
    container,
    ingredients,
    attention_text,
    drawable_element,
    ingredients_inners,
  } = styleClass;

  // TODO возможно надо бы пробросить ошибку, или что то подобное.
  if (!fixedBun)
    return (
      <h3 className={`text text_type_main-large mb-5 ${attention_text}`}>
        что то не найдена булочка
      </h3>
    );

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
                  dispatch(baseActionCreators.removeInSelectedItems(index));
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
