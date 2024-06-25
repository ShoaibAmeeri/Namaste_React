import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  let [ResList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchTxt, setSearchTxt] = useState("");

  return ResList.length === 0 ? (
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
          <button
            className="search_btn"
            onClick={() => {
              console.log(searchTxt);

             const filteredRes = ResList.filter((res)=>
               res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              )

              setFilteredResList(filteredRes)
              // console.log(ResList)

            }}
          >
            search
          </button>
        </div>

        <button
          className="filter_btn"
          onClick={() => {
            ResList = ResList.filter((res) => res.info.avgRating > 4.1);
            setFilteredResList(ResList);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        <div className="carddd"></div>
      </div>
    </div>
  );
};

export default Body;
