import React, { useContext } from "react";
import { CDN_URL } from "../utils/constans";
import UserContext from "../utils/UserContext";

function ItemMenuCard({data}) {
 
  const { name, price, imageId, ratings,description } = data.card.info;
  const { rating, ratingCountV2 } = ratings.aggregatedRating; 
  
  const data2 = useContext(UserContext)
  return (
    <div className="menu_card w-[100%] mx-auto flex justify-between items-center border-t border-t-black py-3">
      <div className="item_text w-9/12 ">
        <p className="font-semibold text-2xl text-red-400">{data2.username}</p>
        <p className="font-bold text-lg ">{name}</p>
        <p className="font-semibold text-lg ">RS.{Math.round(price/100)} </p>
        <p className="font-bold text-base  mt-2 text-green-600">
          ⭐{rating}
          <span className="text-gray-400 font-normal">
           { "(" + ratingCountV2 + ")"}
          </span>
        </p>
        <p>{description.substr(0,110) + '...'}</p>
      </div>
      <div className="item_image w-3/12 text-center relative">
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
