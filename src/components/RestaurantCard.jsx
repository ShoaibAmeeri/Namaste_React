import React from "react";
import { CDN_URL } from "../utils/constans";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res_content">

      <h3>{name}</h3>

    <div className="rating">

      <h3> {avgRating}*</h3>
      
      <h3>{sla.deliveryTime}minutes</h3>
    </div>

      <p className="cuisines">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>

      </div>
    </div>
  );
};

export default RestaurantCard;
