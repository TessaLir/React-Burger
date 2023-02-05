import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { Component } from "react";
import IBurderIngredient from "../../models/byrger-ingredient";

import burgerConstructorStyle from "./burger-constructor.module.css";

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
    if (!this.state.fixedBun) return <>что то не найдена булочка</>;
    const ingredientLength = this.state.selectedIngridient.length;

    return (
      <article
        className={`${burgerConstructorStyle.container} pt-25 pl-4 pr-4`}
      >
        <section className={burgerConstructorStyle.ingredients} style={{}}>
          {this.state.selectedIngridient.slice(0, 1).map((item) => (
            <section className="pl-8 pr-8">
              <ConstructorElement
                key={item._id}
                type="top"
                isLocked={true}
                extraClass={burgerConstructorStyle.element}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
              />
            </section>
          ))}
          <div className={burgerConstructorStyle.ingredients_inners}>
            {this.state.selectedIngridient
              .slice(1, ingredientLength - 1)
              .map((item) => (
                <section
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  className="pr-4"
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    key={item._id}
                    extraClass={burgerConstructorStyle.element}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </section>
              ))}
          </div>
          {this.state.selectedIngridient
            .slice(ingredientLength - 1, ingredientLength)
            .map((item) => (
              <section className="pl-8 pr-8">
                <ConstructorElement
                  key={item._id}
                  type="bottom"
                  isLocked={true}
                  extraClass={burgerConstructorStyle.element}
                  text={`${item.name} (низ)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </section>
            ))}
        </section>

        <section className={`${burgerConstructorStyle.payment} mt-10 pr-10`}>
          <div className={`${burgerConstructorStyle.payment_currency} mr-10`}>
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
