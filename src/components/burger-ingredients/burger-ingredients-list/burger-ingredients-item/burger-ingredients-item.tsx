import React, { Component } from "react";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../../../models/byrger-ingredient";

import style from "./burger-ingredients-item.module.css";

interface IProps {
  item: IBurderIngredient;
}

class BurgerIngredientsItem extends Component<IProps> {
  hasCounter: string[] = [
    "60666c42cc7b410027a1a9b1",
    "60666c42cc7b410027a1a9ba",
    "60666c42cc7b410027a1a9b9",
  ];

  render() {
    const { _id, name, price, image } = this.props.item;

    return (
      <article className={`${style.ingredient} mt-6 mb-10 ml-4 mr-3`}>
        <div className={`${style.ingredient_top} pb-1 pl-4 pr-4`}>
          {!this.hasCounter.includes(_id) ? null : (
            <Counter count={1} size="default" extraClass="m1" />
          )}
          <img className={style.ingredient_image} src={image} alt={_id} />
          <div className={style.ingredient_price}>
            <p className="text text_type_digits-default mr-2">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={style.ingredient_name}>
          <p className="text text_type_main-small">{name}</p>
        </div>
      </article>
    );
  }
}

export default BurgerIngredientsItem;
