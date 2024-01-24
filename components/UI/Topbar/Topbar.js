import React, { useContext, useState } from "react";
import Link from "next/link";
import ProductContext from "@/context/ProductContext/store";

function Topbar() {
  const { state, dispatch } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");

  const search = () => {
    const searchFilter = state.allProducts.filter((item) => item.name.toLowerCase().trim().includes(searchValue.toLowerCase()));

    dispatch({ type: "FILTERANDSORTPRODUCTS", payload: searchFilter });
  };

  return (
    <div className="flex items-center bg-blue-700 h-12 px-12 py-8">
      <div className="flex flex-1 w-full">
        <Link href={"/"} className="flex flex-1 w-full items-center  text-white font-extrabold text-2xl">
          Eteration
        </Link>
        <div className="flex flex-1 w-full items-center relative">
          <div className="absolute  start-0 flex items-center ps-3 pointer-events-none">
            <i className="pi pi-search text-gray-500"></i>
          </div>
          <input
            id="search"
            onChange={(e) => setSearchValue(e.target.value.trim())}
            className="block w-full h-10 ps-10 text-lg outline-0 font-medium"
            placeholder="Search"
            onKeyDown={(e) => {
              e.code === "Enter" && search();
            }}
          />
        </div>
      </div>
      <div className="flex flex-1 w-full justify-end gap-8">
        <span className="text-white select-none">
          <i className="pi pi-shopping-bag mr-2"></i>
          117.000₺
        </span>
        <span className="text-white select-none">
          <i className="pi pi-user mr-2"></i>
          Kerem
        </span>
      </div>
    </div>
  );
}

export default Topbar;
