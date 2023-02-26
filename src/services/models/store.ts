import IBurderIngredient from "../../models/byrger-ingredient";

export interface IStore {
  data: IBurderIngredient[];
  selectedItems: IBurderIngredient[];
  orderList: IBurderIngredient[];
  selectItem: IBurderIngredient | undefined | null;
  selectBun: IBurderIngredient | undefined | null;
}
