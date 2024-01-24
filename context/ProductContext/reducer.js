export function reducer(state, action) {
  switch (action.type) {
    case "PRODUCTS":
      state.allProducts = action.payload;
      return { ...state };

    case "FILTERANDSORTPRODUCTS":
      state.filteredOrSortedProducts = action.payload;
      return { ...state };

    case "BASKET":
      state.basket = action.payload;
      return { ...state };

    case "BRANDS":
      state.allBrands = action.payload;
      return { ...state };

    case "MODELS":
      state.allModels = action.payload;
      return { ...state };

    default:
      return state;
  }
}
