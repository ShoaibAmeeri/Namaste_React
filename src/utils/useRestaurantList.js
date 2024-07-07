import { useEffect, useState } from "react";
import { RESLIST_URL } from "./constans";

const useRestaurantList = () => {
  let [resList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  // fetch restaurants
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESLIST_URL);
    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {resList,filteredResList, setFilteredResList};
};

export default useRestaurantList;
