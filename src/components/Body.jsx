import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search_box"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button className="search_btn" onClick={searchHandler}>
            search
          </button>
        </div>

        <button className="filter_btn" onClick={topResHandler}>
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
