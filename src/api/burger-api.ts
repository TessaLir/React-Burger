import IRequestOrder from "../models/request-order";
import { apiGetDataPath, apiPostSendOrderPath } from "./../helpers/SD";

async function getBurgerIngredient() {
  return await fetch(apiGetDataPath).then(checkResponse);
}

async function fetchSendOrder(body: IRequestOrder) {
  return await fetch(apiPostSendOrderPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  }).then(checkResponse);
}

async function checkResponse(res: Response) {
  return res.ok
    ? res.json()
    : res.json().then((err) => {
        throw new Error(`ошибка получения данных: ${err}`);
      });
}

export { getBurgerIngredient, fetchSendOrder };
