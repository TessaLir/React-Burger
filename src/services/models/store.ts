import IResponseOrderDetail from "../../models/response-order-detail";
import IBurderIngredient from "../../models/byrger-ingredient";

export interface IStore {
  data: IBurderIngredient[];

  selectedItems: IBurderIngredient[];
  selectItem: IBurderIngredient | undefined | null;
  selectBun: IBurderIngredient | undefined | null;

  orderDetail: IResponseOrderDetail | undefined | null;

  orderList: IBurderIngredient[];
}
