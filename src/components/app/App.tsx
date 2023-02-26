import React, { useCallback, useEffect, useMemo, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IResponseOrderDetail from "../../models/response-order-detail";
import { getBurgerIngredient } from "../../api/burger-api";

import styleClass from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, selecteBun } from "../../services/selectors";
import { baseActionCreators } from "../../services/action-creators";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const fixedBun = useSelector(selecteBun);

  const [isLoadData, setIsLoadData] = useState(false);
  const [hasError, setHasError] = useState(false);

  const downloadData = useCallback(async () => {
    setIsLoadData(true);
    await getBurgerIngredient()
      .then((data) => dispatch(baseActionCreators.setData(data.data)))
      .catch((error) => setHasError(true));
    setIsLoadData(false);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoadData && !hasError) {
      downloadData();
    }
  }, [downloadData, hasError, isLoadData]);

  useEffect(() => {
    if (!fixedBun) {
      dispatch(
        baseActionCreators.setSelectBun(
          data.filter((el) => el.type === "bun")[0]
        )
      );
    }
  }, [data, dispatch, fixedBun]);

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
      <AppHeader />
      {content}
    </div>
  );
};

export default App;
