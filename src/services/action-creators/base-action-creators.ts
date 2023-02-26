import {
  INGREDIENTS_DATA,
  SET_INGREDIENTS_DATA,
  INGREDIENTS_SELECTED,
  ADD_IN_INGREDIENTS_SELECTED,
  REMOVE_ONE_INGREDIENTS_SELECTED,
  INGREDIENT_INFO,
  ORDER_LIST,
} from "../action-types";

import IBurderIngredient from "../../models/byrger-ingredient";

export const baseActionCreators = {
  getData: () => ({
    type: INGREDIENTS_DATA,
  }),
  setData: (data: IBurderIngredient[]) => ({
    type: SET_INGREDIENTS_DATA,
    data,
  }),
  getSelectedItems: () => ({
    type: INGREDIENTS_SELECTED,
  }),
  addInSelectedItems: (ingredient: IBurderIngredient) => ({
    type: ADD_IN_INGREDIENTS_SELECTED,
    ingredient,
  }),
  removeInSelectedItems: (index: number) => ({
    type: REMOVE_ONE_INGREDIENTS_SELECTED,
    index,
  }),
  getOrderList: () => ({
    type: ORDER_LIST,
  }),
  getItemInfo: () => ({
    type: INGREDIENT_INFO,
  }),
};