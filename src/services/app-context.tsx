import { createContext } from "react";
import IBurderIngredient from "../models/byrger-ingredient";

export const DataContext = createContext<IBurderIngredient[]>([]);
export const SelectedAllItemsContext = createContext<{
  selectedItems: IBurderIngredient[];
  setSelectedItems: React.Dispatch<React.SetStateAction<IBurderIngredient[]>>;
}>({ selectedItems: [], setSelectedItems: () => {} });


//TODO Тут надо на самом деле преобразовывать стор SelectedAllItemsContex возможно делать его через useReducer, 
//     в selectedItems так же вести подсчет, сколько раз выбирался элемент что то типа:
//     [ { _id: "321123", count: 5 }, { _id: "123321", count: 2 } ] : { _id: string, count: number }[]