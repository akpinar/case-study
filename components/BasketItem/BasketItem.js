import ProductContext from "@/context/ProductContext/store";
import React, { useContext } from "react";

function BasketItem({ id, name, price, count }) {
  const { state, dispatch } = useContext(ProductContext);

  const decrementCount = () => {
    const newBasket = state.basket;

    const currentItemIndex = newBasket.findIndex((item) => item.id === id);

    if (newBasket[currentItemIndex].count === 1) {
      newBasket.splice(currentItemIndex, 1);
    } else {
      newBasket[currentItemIndex] = { ...newBasket[currentItemIndex], count: newBasket[currentItemIndex]["count"] - 1 };
    }

    dispatch({
      type: "BASKET",
      payload: newBasket,
    });
  };

  const incrementCount = () => {
    const newBasket = state.basket;

    const currentItemIndex = newBasket.findIndex((item) => item.id === id);

    newBasket[currentItemIndex] = { ...newBasket[currentItemIndex], count: newBasket[currentItemIndex]["count"] + 1 };

    dispatch({
      type: "BASKET",
      payload: newBasket,
    });
  };

  return (
    <div className="flex justify-between select-none">
      <div className="flex flex-col">
        <span className="text-sm text-black">{name}</span>
        <span className="text-blue-500 font-medium text-xs">{price}₺</span>
      </div>
      <div className="flex">
        <span className="w-7 h-7 flex items-center justify-center font-medium cursor-pointer bg-gray-200 text-xl rounded" onClick={decrementCount}>
          -
        </span>
        <span className="w-7 h-7 flex items-center justify-center font-medium bg-blue-500 text-white text-xl">{count}</span>
        <span className="w-7 h-7 flex items-center justify-center font-medium cursor-pointer bg-gray-200 rounded text-xl" onClick={incrementCount}>+</span>
      </div>
    </div>
  );
}

export default BasketItem;
