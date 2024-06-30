import React from "react";
import { CDN_URL } from "../utils/constans";

function ItemMenuCard(props) {
  const { data } = props;
  return (
    <div className="menu_card">
      <div className="item_text">
        <p className="item_name">{data.name}</p>
        <p className="item_price">{data.price / 100}Rs</p>
      </div>
      <div className="item_image">
        <img src={CDN_URL + data.imageId} alt="hello swiggy" />
      </div>
    </div>
  );
}
export default ItemMenuCard;
