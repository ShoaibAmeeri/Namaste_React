import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  let { resList, filteredResList, setFilteredResList } = useRestaurantList();
  const [searchTxt, setSearchTxt] = useState("");
  const onlineStatus = useOnlineStatus();

  const searchHandler = () => {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilteredResList(filteredRes);
  };
  const topResHandler = () => {
    resList = resList.filter((res) => res.info.avgRating > 4.1);
    setFilteredResList(resList);
  };

  if (onlineStatus === false)
    return (
      <h1>oopss. you are offline please check you internet connection....</h1>
    );

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search_box border-2 border-black rounded-md rounded-e-none "
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="bg-green-200 px-4 py-1 rounded-lg rounded-s-none "
            onClick={searchHandler}
          >
            search
          </button>
        </div>
        <div className="p-4 m-4 ms-0">
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg  "
            onClick={topResHandler}
          >
            Filter Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.avgRatingString > 4.2 ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
