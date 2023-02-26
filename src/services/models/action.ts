import IBurderIngredient from "../../models/byrger-ingredient";

export interface IAction {
  type: string;
  data?: IBurderIngredient[];
  index?: number;
  ingredient?: IBurderIngredient;
}
