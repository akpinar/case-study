import React, { useContext } from "react";
import Card from "../Card/Card";
import ProductContext from "@/context/ProductContext/store";

function BrandCard() {
  const { state } = useContext(ProductContext);
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 mb-1.5">Brands</span>
      <Card>
        <div className="flex w-full items-center relative">
          <div className="absolute start-0 flex items-center ps-3 pointer-events-none">
            <i className="pi pi-search text-gray-500"></i>
          </div>
          <input id="search" className="bg-gray-50 block w-full h-10 ps-10 outline-0 font-medium" placeholder="Search" />
        </div>
        <div className="flex flex-col gap-4 overflow-auto">
          {state.allBrands.map((brand) => (
            <div key={brand} className="flex items-center">
              <input id={brand} type="checkbox" value={brand} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
              <label htmlFor={brand} className="ms-2 text-sm text-neutral-900	">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default BrandCard;
