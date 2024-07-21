import React, { useState } from "react";
import ItemMenuCard from "./ItemMenuCard";

function RestaurantCatagory({ data, showItems, setShowIndex }) {
  const clickHandle = () => {
    setShowIndex();
  };

  return (
    <div
      className="w-6/12 mx-auto my-4 bg-gray-50 border shadow-lg p-4 cursor-pointer"
      onClick={clickHandle}
    >
      <div className=" flex justify-between">
        <span className="font-bold text-lg ">
          {data.title} : ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {data.itemCards.map((i) => showItems && <ItemMenuCard data={i} />)}
    </div>
  );
}

export default RestaurantCatagory;
