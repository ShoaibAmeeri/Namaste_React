import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  
  let [ResList, setResList] = useState([]);
  useEffect( () => {
     fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json()
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  };

  if (ResList.length === 0) {
    return(
      <Shimmer/>
    )
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            ResList = ResList.filter((res) => res.info.avgRating > 4);
            setResList(ResList);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ResList.map((restaurant, i) => (
          <>
          <RestaurantCard key={i} resData={restaurant.info} />
       {   console.log(restaurant.info.cloudinaryImageId)}
          </>
         ))} 

         <div className="carddd"></div>
      </div>
    </div>
  );
};

export default Body;
