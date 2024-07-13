import React from "react";
import { CDN_URL } from "../utils/constans";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      className="m-3 p-4 w-[239px] h-[400px]"
      style={{ backgroundColor: "#f0f0f0" }}
    >
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

export default RestaurantCard;
