import React, { useEffect, useContext, useState } from "react";
import BrandCard from "@/components/BrandCard/BrandCard";
import SortByCard from "@/components/SortByCard/SortByCard";
import ModelCard from "@/components/ModelCard/ModelCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import BasketItem from "@/components/BasketItem/BasketItem";
import Card from "@/components/Card/Card";
import { getAction } from "@/actions/actions";
import ProductContext from "@/context/ProductContext/store";
import Pagination from "@/components/Pagination/Pagination";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await getAction().then((res) => {
      dispatch({ type: "PRODUCTS", payload: res.data });
      setTotalPage(Math.ceil(res.data.length / 12));
      dispatch({ type: "FILTERANDSORTPRODUCTS", payload: res.data });
      const brands = Array.from(new Set(res.data.map((item) => item.brand)));
      const models = Array.from(new Set(res.data.map((item) => item.model)));
      dispatch({ type: "BRANDS", payload: brands });
      dispatch({ type: "MODELS", payload: models });
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <BrandCard />
        <SortByCard />
        <ModelCard />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {state.filteredOrSortedProducts.slice((currentPage - 1) * 12, currentPage * 12).map((item) => (
            <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          {state.basket.map((item) => (
            <BasketItem key={item.id} name={item.name} price={item.price} count={item.count} id={item.id} />
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Home;
