import { createContext } from "react";
import IBurderIngredient from "../models/byrger-ingredient";

export const DataContext = createContext<IBurderIngredient[]>([]);
export const SelectedAllItemsContext = createContext<{
  selectedItems: IBurderIngredient[];
  setSelectedItems: React.Dispatch<React.SetStateAction<IBurderIngredient[]>>;
}>({ selectedItems: [], setSelectedItems: () => {} });

export const SelectItemContext = createContext<{
  selectItem: IBurderIngredient | null;
  setSelectItem: React.Dispatch<React.SetStateAction<IBurderIngredient | null>>;
}>({ selectItem: null, setSelectItem: () => {} });

export const SelectBunContext = createContext<{
  fixedBun: IBurderIngredient | null;
  setFixedBun: React.Dispatch<React.SetStateAction<IBurderIngredient | null>>;
}>({ fixedBun: null, setFixedBun: () => {} });
