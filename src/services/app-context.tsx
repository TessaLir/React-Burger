import { Dispatch, createContext, SetStateAction } from "react";
// import IBurderIngredient from "../models/byrger-ingredient";
// import IResponseOrderDetail from "../models/response-order-detail";

// export const DataContext = createContext<IBurderIngredient[]>([]);
// export const SelectedAllItemsContext = createContext<{
//   selectedItems: IBurderIngredient[];
//   setSelectedItems: Dispatch<SetStateAction<IBurderIngredient[]>>;
// }>({ selectedItems: [], setSelectedItems: () => {} });

// export const SelectItemContext = createContext<{
//   selectItem: IBurderIngredient | null;
//   setSelectItem: Dispatch<SetStateAction<IBurderIngredient | null>>;
// }>({ selectItem: null, setSelectItem: () => {} });

export const ShowModal = createContext<{
  isShowModal: boolean;
  toggleShowModal: Dispatch<SetStateAction<boolean>>;
}>({ isShowModal: false, toggleShowModal: (prev) => !prev });

// export const SelectBunContext = createContext<{
//   fixedBun: IBurderIngredient | null;
//   setFixedBun: Dispatch<SetStateAction<IBurderIngredient | null>>;
// }>({ fixedBun: null, setFixedBun: () => {} });

// export const OrderDetailsContext = createContext<{
//   orderDetail: IResponseOrderDetail | null;
//   setOrderDetail: Dispatch<SetStateAction<IResponseOrderDetail | null>>;
// }>({ orderDetail: null, setOrderDetail: () => {} });
