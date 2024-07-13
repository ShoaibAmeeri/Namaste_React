import React from "react";
import { CDN_URL } from "../utils/constans";

function ItemMenuCard(props) {
  const { data } = props;
  console.log(data);
  const { name, price, imageId, ratings } = data;
  const { rating, ratingCountV2 } = ratings.aggregatedRating;
  console.log(data);
  return (
    <div className="menu_card w-[100%] mx-auto flex justify-between items-center border-t border-t-black py-3">
      <div className="item_text">
        <p className="font-bold text-lg ">{name}</p>
        <p className="font-semibold text-lg ">Rs.{price / 10}</p>
        <p className="font-bold text-base  mt-2 text-green-600">
          ⭐{rating}
          <span className="text-gray-400 font-normal">
            {"(" + ratingCountV2 + ")"}
          </span>
        </p>
      </div>
      <div className="item_image w-[170px] text-center relative">
        <img
          className="w-[170px] rounded-xl h-[140px]"
          src={CDN_URL + imageId}
          alt="hello swiggy"
        />
        <button className="font-bold text-xl text-green-500 border bg-white px-7 py-2 rounded-lg absolute top-28 left-9 z-10 shadow-lg">
          ADD
        </button>
        <p className="font-mono text-gray-500 mt-3">customizable</p>
      </div>
    </div>
  );
}
export default ItemMenuCard;
