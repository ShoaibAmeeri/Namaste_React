import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemMenuCard from "./ItemMenuCard";
import Shimmer from "./Shimmer";

ItemMenuCard;
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .categories;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  return (
    <div className="menu w-[60%] mx-auto ">
      <div className="w-[60%] h-[200px] p-5 my-5 rounded-2xl bg-green-500 flex flex-col gap-4 text-2xl text-white font-bold" >

      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwoMessage}</p>
      </div>
      <h2 className="font-bold text-white text-2xl my-10 text-center bg-green-800">Menu</h2>
      <ul className="">
        {categories
          ? categories.map((category) => (
              
                  <li className="mb-44 w-[100%] mx-auto">
                    <h1 className="font-bold text-3xl text-green-500 my-2"> Catagory : {category.title}</h1>
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
                {/* <h1>{item}</h1> */}

                {console.log(item.card)}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
