import React, { useState } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerIngredientsList from "./burger-ingredients-list/burger-ingredients-list";
import { tabs } from "../../helpers/SD";

import styleClass from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState(tabs[0].key);

  return (
    <article className={`${styleClass.content} pt-10`}>
      <h3 className={`${styleClass.title} text text_type_main-large mb-5`}>
        Соберите бургер
      </h3>

      <section className={`${styleClass.tabs} mb-10`}>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            value={tab.key}
            active={current === tab.key}
            onClick={() => setCurrent(tab.key)}
          >
            {tab.text}
          </Tab>
        ))}
      </section>

      <section className={styleClass.list}>
        {tabs.map((tab) => (
          <BurgerIngredientsList key={tab.key} tab={tab} />
        ))}
      </section>
    </article>
  );
};

export default BurgerIngredients;
