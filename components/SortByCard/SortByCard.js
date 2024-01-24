import ProductContext from "@/context/ProductContext/store";
import React, { useContext, useState } from "react";

function SortByCard() {
  const { state, dispatch } = useContext(ProductContext);

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange =  async (event) => {
    setSelectedValue(event.target.value);

    let products = state.allProducts;

    switch (event.target.value) {
      case "oldToNew":
        products = products.sort((a, b) => a.createdAt - b.createdAt);
        break;

      case "newToOld":
        products = products.sort((a, b) => b.createdAt - a.createdAt);
        break;

      case "priceHightToLow":
        products = products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;

      case "priceLowToHight":
        products = products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;

      default:
        break;
    }

    console.log(products)

    await dispatch({
      tpye: "FILTERANDSORTPRODUCTS",
      payload: [...products],
    });
  };

  console.log(selectedValue);
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 mb-1.5">Sort By</span>
      <fieldset className="flex flex-col gap-4 bg-white p-4 shadow-md w-full max-h-44" onChange={(event) => handleRadioChange(event)}>
        <label htmlFor="oldToNew" className="flex items-center  gap-2 text-sm text-neutral-900">
          <input id="oldToNew" type="radio" value="oldToNew" name="sort-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" checked={selectedValue === "oldToNew"} />
          Old to new
        </label>

        <label htmlFor="newToOld" className="flex items-center  gap-2 text-sm text-neutral-900">
          <input checked={selectedValue === "newToOld"} id="newToOld" type="radio" value="newToOld" name="sort-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" /> New to old
        </label>

        <label htmlFor="priceHightToLow" className="flex items-center  gap-2 text-sm text-neutral-900">
          <input checked={selectedValue === "priceHightToLow"} id="priceHightToLow" type="radio" value="priceHightToLow" name="sort-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          Price hight to low
        </label>

        <label htmlFor="priceLowToHigh" className="flex items-center  gap-2 text-sm text-neutral-900">
          <input checked={selectedValue === "priceLowToHigh"} id="priceLowToHigh" type="radio" value="priceLowToHigh" name="sort-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          Price low to High
        </label>
      </fieldset>
    </div>
  );
}

export default SortByCard;
