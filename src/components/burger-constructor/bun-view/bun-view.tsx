import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../models/byrger-ingredient";

import styleClass from "./bun-view.module.css";

interface IProps {
  position: "top" | "bottom";
  bunIngredient: IBurderIngredient;
}

const BunVuew = ({ position, bunIngredient }: IProps) => {
  const { name, price, image } = bunIngredient;
  return (
    <section className="pl-8 pr-8">
      <ConstructorElement
        type={position}
        isLocked={true}
        extraClass={styleClass.element}
        text={`${name} (${position === "top" ? "верх" : "низ"})`}
        price={price}
        thumbnail={image}
      />
    </section>
  );
};

export default BunVuew;
