import React, { useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

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
          <li className="px-4">Cart</li>
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
          <Link
            className="signup"
            onClick={() =>
              btnName === "logout"
                ? setBtnName("signup")
                : (document.getElementsByClassName("signup").style.display =
                    "none")
            }
            to={"/signup"}
          >
            Sign up
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
