import ProductContext from "@/context/ProductContext/store";
import React, { useContext, useEffect, useState } from "react";

function ModelCard() {
  const { state } = useContext(ProductContext);

  const [filteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    setFilteredModels(state.allModels);
  }, [state.allModels]);

  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 mb-1.5">Model</span>
      <div className="flex flex-col gap-4 bg-white p-4 shadow-md w-full max-h-44">
        <div className="flex w-full items-center relative">
          <div className="absolute start-0 flex items-center ps-3 pointer-events-none">
            <i className="pi pi-search text-gray-500"></i>
          </div>
          <input
            id="search"
            className="bg-gray-50 block w-full h-10 ps-10 outline-0 font-medium"
            placeholder="Search"
            onChange={(e) => {
              setFilteredModels(state.allModels.filter((item) => item.trim().toLowerCase().includes(e.target.value.trim())));
            }}
          />
        </div>
        <div className="flex flex-col gap-4 overflow-auto">
          {filteredModels.map((model) => (
            <div key={model} className="flex items-center">
              <input id={model} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
              <label htmlFor={model} className="ms-2 text-sm text-neutral-900	">
                {model}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
