import {
  INGREDIENTS_DATA,
  SET_INGREDIENTS_DATA,
  INGREDIENTS_SELECTED,
  SELECT_INGREDIENT,
  SET_SELECT_INGREDIENT,
  SELECT_BUN,
  SET_SELECT_BUN,
  ADD_IN_INGREDIENTS_SELECTED,
  REMOVE_ONE_INGREDIENTS_SELECTED,
  INGREDIENT_INFO,
  ORDER_LIST,
  ORDER_DETAIL,
  SET_ORDER_DETAIL,
} from "../action-types";

import IBurderIngredient from "../../models/byrger-ingredient";
import IResponseOrderDetail from "../../models/response-order-detail";

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

  selectItem: () => ({
    type: SELECT_INGREDIENT,
  }),
  setSelectItem: (ingredient: IBurderIngredient | null) => ({
    type: SET_SELECT_INGREDIENT,
    ingredient,
  }),

  selectBun: () => ({
    type: SELECT_BUN,
  }),
  setSelectBun: (ingredient: IBurderIngredient) => ({
    type: SET_SELECT_BUN,
    ingredient,
  }),

  orderDetail: () => ({
    type: ORDER_DETAIL,
  }),
  setOrderDetail: (orderDetail: IResponseOrderDetail) => ({
    type: SET_ORDER_DETAIL,
    orderDetail,
  }),

  getOrderList: () => ({
    type: ORDER_LIST,
  }),

  getItemInfo: () => ({
    type: INGREDIENT_INFO,
  }),
};
