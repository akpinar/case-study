import { createContext } from "react";

export const initialState = {
  allProducts:[],
  filteredOrSortedProducts: [],
  basket: [],
  allBrands: [],
  allModels: [],
};

const ProductContext = createContext(initialState);

export default ProductContext;
