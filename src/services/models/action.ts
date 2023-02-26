import IBurderIngredient from "../../models/byrger-ingredient";
import IResponseOrderDetail from "../../models/response-order-detail";

export interface IAction {
  type: string;
  data?: IBurderIngredient[];
  index?: number;
  ingredient?: IBurderIngredient | null;
  orderDetail?: IResponseOrderDetail | null;
}
