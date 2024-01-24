import React from "react";

function Card({children}) {
  return <div className="flex flex-col gap-4 bg-white p-4 shadow-md w-full max-h-44 overflow-auto min-w-56">{children}</div>;
}

export default Card;
