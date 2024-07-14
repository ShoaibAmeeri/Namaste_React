import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemMenuCard from "./ItemMenuCard";
import RestaurantCatagory from "./RestaurantCatagory";
import Shimmer from "./Shimmer";

ItemMenuCard;
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(catagories);
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .categories;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  return (
    <div className="">
      <h1 className="font-bold my-6 text-2xl text-center" >{name}</h1>
      <p className="font-bold text-lg text-center">{cuisines.join(", ")}</p>
      {catagories.map((e) => (
        <RestaurantCatagory data={e.card.card} />
      ))}
    </div>
  );
}

export default RestaurantMenu;

{
  /* <ul className="">
{categories
  ? categories.map((category) => (
      <li className="mb-44 w-[100%] mx-auto">
        <h1 className="font-bold text-3xl text-green-500 my-2">
          {" "}
          Catagory : {category.title}
        </h1>
        <ul className="">
          {category.itemCards.map((item) => (
            <>
              <li key={item.card.info.id}>
                <ItemMenuCard data={item.card.info} />
              </li>
              <hr />
            </>
          ))}
        </ul>
      </li>
    ))
  : itemCards.map((item) => (
      <li key={item.card.info.id}>
        <ItemMenuCard data={item.card.info} />
      </li>
    ))}
</ul> */
}
