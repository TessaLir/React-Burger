import IBurderIngredient from "../../models/byrger-ingredient";

export interface IStore {
  data: IBurderIngredient[];
  selectedItems: IBurderIngredient[];
  orderList: IBurderIngredient[];
}
