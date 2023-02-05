import React, { Component } from "react";

import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IBurderIngredient from "../../models/byrger-ingredient";

import styleClass from "./burger-constructor.module.css";

interface IProps {
  data: IBurderIngredient[];
}

class BurgerConstructor extends Component<IProps> {
  state: {
    fixedBun: IBurderIngredient | null;
    selectedIngridient: IBurderIngredient[];
  } = {
    fixedBun: null,
    selectedIngridient: [],
  };

  selectedIngridientID: string[] = [
    "60666c42cc7b410027a1a9b9",
    "60666c42cc7b410027a1a9b4",
    "60666c42cc7b410027a1a9bc",
    "60666c42cc7b410027a1a9bb",
    "60666c42cc7b410027a1a9bb",
    "60666c42cc7b410027a1a9b4",
    "60666c42cc7b410027a1a9bc",
  ];

  componentDidMount() {
    if (!this.state.fixedBun) {
      this.setState((prevState) => ({
        ...prevState,
        fixedBun: this.props.data[0],
      }));
    }
    if (
      this.state.selectedIngridient.length === 0 &&
      this.selectedIngridientID.length > 0
    ) {
      const newSelectedIngredients: IBurderIngredient[] = [];

      newSelectedIngredients.push(this.props.data[0]);
      for (let i = 0; i < this.selectedIngridientID.length; i++) {
        const ingredient = this.props.data.find(
          (el) => el._id === this.selectedIngridientID[i]
        );
        if (ingredient) {
          newSelectedIngredients.push(ingredient);
        }
      }
      newSelectedIngredients.push(this.props.data[0]);

      this.setState((prevState) => ({
        ...prevState,
        selectedIngridient: newSelectedIngredients,
      }));
    }
  }

  render() {
    // TODO возможно надо бы пробросить ошибку, или что то подобное.
    if (!this.state.fixedBun)
      return (
        <h3
          className={`text text_type_main-large mb-5 ${styleClass.attention_text}`}
        >
          что то не найдена булочка
        </h3>
      );
    const ingredientLength = this.state.selectedIngridient.length;

    return (
      <article className={`${styleClass.container} pt-25 pl-4 pr-4`}>
        <section className={styleClass.ingredients}>
          {this.state.selectedIngridient.slice(0, 1).map((item, index) => (
            <section key={`${item._id}-${index}`} className="pl-8 pr-8">
              <ConstructorElement
                type="top"
                isLocked={true}
                extraClass={styleClass.element}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
              />
            </section>
          ))}
          <div className={styleClass.ingredients_inners}>
            {this.state.selectedIngridient
              .slice(1, ingredientLength - 1)
              .map((item, index) => (
                <section
                  key={`${item._id}-${index}`}
                  className={`${styleClass.drawable_element} pr-4`}
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    extraClass={styleClass.element}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </section>
              ))}
          </div>
          {this.state.selectedIngridient
            .slice(ingredientLength - 1, ingredientLength)
            .map((item, index) => (
              <section key={`${item._id}-${index}`} className="pl-8 pr-8">
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  extraClass={styleClass.element}
                  text={`${item.name} (низ)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </section>
            ))}
        </section>

        <section className={`${styleClass.payment} mt-10 pr-10`}>
          <div className={`${styleClass.payment_currency} mr-10`}>
            <p className="text text_type_digits-default pr-2">
              {this.state.selectedIngridient.reduce(
                (summ, item) => summ + item.price,
                0
              )}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </section>
      </article>
    );
  }
}

export default BurgerConstructor;
