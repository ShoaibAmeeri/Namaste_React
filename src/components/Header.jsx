import React, { useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header_container">

    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>

          <Link
            className="login"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
            to={"/login"}
            >
            {btnName}
            </Link>

          <Link
            className="signup"
            onClick={() =>
              btnName === "logout" ? setBtnName("signup") : document.getElementsByClassName("signup").style.display="none"
            }
            to={"/signup"}
            >
            
            Sign up
          </Link>
        </ul>
      </div>
    </div>
            </div>
  );
};

export default Header;
