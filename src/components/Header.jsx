import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items)

  console.log(cartItems);
  

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg p-3">
      <div className="">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}> Cart ({cartItems.length} items)</Link> </li>
          <li className="px-4">
            <Link
              className="login"
              onClick={() =>
                btnName === "login" ? setBtnName("logout") : setBtnName("login")
              }
              to={"/login"}
            >
              {btnName}
            </Link>
          </li>
          <li className="font-semibold text-xl w-36 overflow-hidden h-8 ">
            {LoggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
