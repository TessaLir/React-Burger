import React, { useEffect, useMemo, useState } from "react";

import AppHeader from "../app-header/app-header";
import IBurderIngredient from "../../models/byrger-ingredient";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IResponseOrderDetail from "../../models/response-order-detail";
import { getBurgerIngredient } from "../../api/burger-api";
import {
  SelectBunContext,
  OrderDetailsContext,
} from "../../services/app-context";

import styleClass from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "../../services/selectors";
import { baseActionCreators } from "../../services/action-creators";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const [fixedBun, setFixedBun] = useState<IBurderIngredient | null>(null);
  const [orderDetail, setOrderDetail] = useState<IResponseOrderDetail | null>(
    null
  );

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
      .then((data) => dispatch(baseActionCreators.setData(data.data)))
      .catch((error) => setHasError(true));

    setIsLoadData(false);
  };

  const contextSelectedBun = useMemo(() => {
    return { fixedBun, setFixedBun };
  }, [fixedBun, setFixedBun]);

  const contextSelectedDetail = useMemo(() => {
    return { orderDetail, setOrderDetail };
  }, [orderDetail, setOrderDetail]);

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
          <SelectBunContext.Provider value={contextSelectedBun}>
            <OrderDetailsContext.Provider value={contextSelectedDetail}>
              <BurgerIngredients />
              <BurgerConstructor />
            </OrderDetailsContext.Provider>
          </SelectBunContext.Provider>
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
