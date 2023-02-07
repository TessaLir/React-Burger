import React, { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { getBurgerIngredient } from "../../api/burger-api";

import styleClass from "./App.module.css";
import IBurderIngredient from "../../models/byrger-ingredient";

const App = () => {
  const [data, setData] = useState<IBurderIngredient[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(getBurgerIngredient());
    }, 750);
  }, []);

  const content =
    data.length === 0 ? (
      <h3
        className={`text text_type_main-large mb-5 ${styleClass.loading_text}`}
      >
        Загрузка данных
      </h3>
    ) : (
      <main>
        <div className={styleClass.container}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    );

  return (
    <div className={styleClass.app}>
      <AppHeader />
      {content}
    </div>
  );
};

export default App;
