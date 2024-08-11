import React from "react";
import { CDN_URL } from "../utils/constans";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-3 p-4 w-[239px] h-[400px] bg-gray-100 hover:bg-gray-200 transition-all rounded-lg">
      <img
        className="h-[170px] w-[100%] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}*</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-4 py-2 left-3 rounded-lg opacity-85">
          Promoted
        </label>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
