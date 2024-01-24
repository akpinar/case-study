import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductContext from "@/context/ProductContext/store";

function ProductCard({ id, name, price, image }) {
  const { state, dispatch } = useContext(ProductContext);

  const itemToBasket = (e) => {
    const newBasket = state.basket;
    const duplicateBasket = newBasket.some((item) => item.id === id);

    if (duplicateBasket) {
      const currentItemIndex = state.basket.findIndex((item) => item.id === id);

      newBasket[currentItemIndex] = { ...newBasket[currentItemIndex], count: newBasket[currentItemIndex]["count"] + 1 };
    } else {
      newBasket.push({ id: id, price: price, name: name, count: 1 });
    }

    dispatch({
      type: "BASKET",
      payload: newBasket,
    });

    e.preventDefault();
  };

  return (
    <Link href={`/`} className="bg-white flex flex-col justify-between p-2.5  w-44 h-72">
      <div className="flex flex-col gap-4">
        <Image src={image} width={150} height={160} />
        <span className="font-medium text-sm text-blue-500">{price}₺</span>
        <span className="font-medium text-sm text-black">{name}</span>
      </div>
      <button onClick={(e) => itemToBasket(e)} className="w-full flex items-center justify-center py-2 px-4 h-9 rounded bg-blue-700 text-white">
        Add to Cart
      </button>
    </Link>
  );
}

export default ProductCard;
