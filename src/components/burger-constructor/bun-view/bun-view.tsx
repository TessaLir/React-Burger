import React from "react";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import styleClass from "./bun-view.module.css";
import { useSelector } from "react-redux/es/exports";
import { selecteBun } from "../../../services/selectors";

interface IProps {
  position: "top" | "bottom";
}

const BunVuew = ({ position }: IProps) => {
  const fixedBun = useSelector(selecteBun);

  if (!fixedBun) return null;

  const { name, price, image } = fixedBun;
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
