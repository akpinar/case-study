import React, { useReducer } from "react";
import Context, { initialState } from "./store";
import { reducer } from "./reducer";

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default ProductProvider;
