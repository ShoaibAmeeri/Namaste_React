import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemMenuCard from "./itemMenuCard";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constans";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            <ItemMenuCard data={item.card.info} />{" "}
          </li>
        ))}
        {/* {itemCards.map((item)=> <li>{item.card.info.name} -- {item.card.info.price}</li> )} */}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
