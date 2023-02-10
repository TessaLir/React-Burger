import React, { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { getBurgerIngredient } from "../../api/burger-api";

import styleClass from "./App.module.css";
import IBurderIngredient from "../../models/byrger-ingredient";

const App = () => {
  const [data, setData] = useState<IBurderIngredient[]>([]);
  const [selectedItems, setSelectedItems] = useState<IBurderIngredient[]>([]);

  const [isLoadData, setIsLoadData] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (data.length === 0 && !isLoadData && !hasError) {
      downloadData();
    }
  }, [data.length, hasError, isLoadData]);

  const downloadData = async () => {
    setIsLoadData(true);
    const data = await getBurgerIngredient();
    console.log(data);
    if (data.success) {
      setData(data.data);
    } else {
      setHasError(true);
    }
    setIsLoadData(false);
  };

  const content =
    data.length === 0 ? (
      <h3
        className={`text text_type_main-large mb-5 ${styleClass.loading_text}`}
      >
        {
          hasError && 'Произошла ошибка загрузки'
        }
        {
          !hasError && 'Загрузка данных'
        }
      </h3>
    ) : (
      <main>
        <div className={styleClass.container}>
          <BurgerIngredients
            data={data}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <BurgerConstructor
            data={data}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
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
