import React, { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { getBurgerIngredient } from "../../api/burger-api";

import styleClass from "./App.module.css";
import IBurderIngredient from "../../models/byrger-ingredient";
import {
  DataContext,
  SelectBunContext,
  SelectedAllItemsContext,
} from "../../services/app-context";

const App = () => {
  const [data, setData] = useState<IBurderIngredient[]>([]);
  const [selectedItems, setSelectedItems] = useState<IBurderIngredient[]>([]);
  const [fixedBun, setFixedBun] = useState<IBurderIngredient | null>(null);

  const [isLoadData, setIsLoadData] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (data.length === 0 && !isLoadData && !hasError) {
      downloadData();
    }
  }, [data.length, hasError, isLoadData]);

  useEffect(() => {
    if (!fixedBun) {
      setFixedBun(data.filter((el) => el.type === "bun")[0]);
    }
  }, [data, fixedBun]);

  const downloadData = async () => {
    setIsLoadData(true);
    await getBurgerIngredient()
      .then((data) => setData(data.data))
      .catch((error) => setHasError(true));

    setIsLoadData(false);
  };

  const content =
    data.length === 0 ? (
      <h3
        className={`text text_type_main-large mb-5 ${styleClass.loading_text}`}
      >
        {hasError && "Произошла ошибка загрузки"}
        {!hasError && "Загрузка данных"}
      </h3>
    ) : (
      <main>
        <div className={styleClass.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    );

  return (
    <div className={styleClass.app}>
      <DataContext.Provider value={data}>
        <SelectedAllItemsContext.Provider
          value={{ selectedItems, setSelectedItems }}
        >
          <SelectBunContext.Provider
            value={{ fixedBun: fixedBun, setFixedBun: setFixedBun }}
          >
            <AppHeader />
            {content}
          </SelectBunContext.Provider>
        </SelectedAllItemsContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
