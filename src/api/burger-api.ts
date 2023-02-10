import { apiPath } from "./../helpers/SD";

async function getBurgerIngredient() {
  return await fetch(apiPath)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("ошибка получения данных");
    })
    .then((body) => body)
    .catch((e) => e);
}

export { getBurgerIngredient };
