import { apiPath } from "./../helpers/SD";

async function getBurgerIngredient() {
  const res = await fetch(apiPath);
  const json = await res.json();
  return json.data;
};

export { getBurgerIngredient };
