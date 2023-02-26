import { IStore } from "../models";

export const dataSelector = (state: IStore) => state.data;
export const orderSelector = (state: IStore) => state.orderList;
export const selectedSelector = (state: IStore) => state.selectedItems;
