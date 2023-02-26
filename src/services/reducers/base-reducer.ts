import {
  INGREDIENTS_DATA,
  SET_INGREDIENTS_DATA,
  INGREDIENTS_SELECTED,
  SET_SELECT_BUN,
  SET_SELECT_INGREDIENT,
  ADD_IN_INGREDIENTS_SELECTED,
  REMOVE_ONE_INGREDIENTS_SELECTED,
  ORDER_LIST,
  SET_ORDER_DETAIL,
} from "../action-types";

import { IAction, IStore } from "../models";

export const initialState: IStore = {
  data: [],

  selectedItems: [],
  selectItem: null,
  selectBun: null,

  orderDetail: null,
  orderList: [],
};

export const baseReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INGREDIENTS_DATA:
      return state;
    case SET_INGREDIENTS_DATA:
      if (!action.data) return state;
      return {
        ...state,
        data: action.data,
      };
    case INGREDIENTS_SELECTED:
      return state;
    case ORDER_LIST:
      return state;
    case ADD_IN_INGREDIENTS_SELECTED:
      //TODO По хорошему если в экшен не передан ингредиент, надо вызывать ошиюку.
      if (!action.ingredient) return state;
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.ingredient],
      };
    case REMOVE_ONE_INGREDIENTS_SELECTED:
      //TODO По хорошему если в экшен не передан индекс удаляемого ингредиента, надо вызывать ошиюку.
      if (!action.index) return state;
      const prevItems = state.data.slice(0, action.index);
      const nextItems = state.data.slice(action.index);
      return {
        ...state,
        data: [...prevItems, ...nextItems],
      };
    case SET_SELECT_INGREDIENT:
      return {
        ...state,
        selectItem: action.ingredient,
      };
    case SET_SELECT_BUN:
      return {
        ...state,
        selectBun: action.ingredient,
      };
    case SET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.orderDetail,
      };
    default:
      return state;
  }
};
