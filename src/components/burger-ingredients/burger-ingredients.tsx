import React, { Component } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IBurderIngredient from "../../models/byrger-ingredient";
import BurgerIngredientsList from "./burger-ingredients-list/burger-ingredients-list";

import burgerIngredientsStyle from "./burger-ingredients.module.css";

interface IProps {
  data: IBurderIngredient[];
}

class BurgerIngredients extends Component<IProps> {
  tabs: { key: string; text: string }[] = [
    {
      key: "bun",
      text: "Булки",
    },
    {
      key: "sauce",
      text: "Соусы",
    },
    {
      key: "main",
      text: "Начинки",
    },
  ];

  state = {
    current: this.tabs[0].key,
  };

  setCurrent = (current: string) => {
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <article className={`${burgerIngredientsStyle.content} pt-10`}>
        <h3
          style={{ fontSize: "40px" }}
          className={`${burgerIngredientsStyle.title} text text_type_main-large mb-5`}
        >
          Соберите бургер
        </h3>

        <section style={{ display: "flex" }} className="mb-10">
          {this.tabs.map((tab) => (
            <Tab
              key={tab.key}
              value={tab.key}
              active={current === tab.key}
              onClick={() => this.setCurrent(tab.key)}
            >
              {tab.text}
            </Tab>
          ))}
        </section>

        <section
          className={burgerIngredientsStyle.list}
          style={{ maxHeight: "700px", overflowY: "scroll" }}
        >
          {this.tabs.map((tab) => (
            <BurgerIngredientsList
              key={tab.key}
              title={tab.text}
              data={this.props.data.filter((el) => el.type === tab.key)}
            />
          ))}
        </section>
      </article>
    );
  }
}

export default BurgerIngredients;
