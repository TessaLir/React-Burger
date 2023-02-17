import IRequestOrder from "../models/request-order";
import { apiGetDataPath, apiPostSendOrderPath } from "./../helpers/SD";

async function getBurgerIngredient() {
  return await fetch(apiGetDataPath).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("ошибка получения данных");
  });
}

async function fetchSendOrder(body: IRequestOrder) {
  return await fetch(apiPostSendOrderPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("ошибка получения данных");
  });
}

export { getBurgerIngredient, fetchSendOrder };
