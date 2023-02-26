import { IStore } from "../models";

export const dataSelector = (state: IStore) => state.data;

export const selectedSelector = (state: IStore) => state.selectedItems;
export const selecteItem = (state: IStore) => state.selectItem;
export const selecteBun = (state: IStore) => state.selectBun;

export const orderDetailSelector = (state: IStore) => state.orderDetail;
