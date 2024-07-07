import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ItemMenuCard from "./itemMenuCard";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

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
            <ItemMenuCard data={item.card.info} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
