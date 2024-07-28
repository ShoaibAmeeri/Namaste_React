import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);
  // const [showItems, setShowItems] = useState(false)
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) =>
      setShowIndex(prevIndex === index ? null : index)
    );
  };
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .categories;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  return (
    <div className="">
      <h1 className="font-bold my-6 text-2xl text-center">{name}</h1>
      <p className="font-bold text-lg text-center">{cuisines.join(", ")}</p>
      {catagories.map((e, i) => (
        <RestaurantCatagory
          key={e.card.card.title}
          data={e.card.card}
          showItems={i === showIndex ? true : false}
          setShowIndex={() => handleSetShowIndex(i)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
