import React from "react";
import Login from "./Login";
import "./Header.css";
import main from "./img/main.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={main} alt="people" />
      <div className="wrapper">
        <Login />
      </div>
    </div>
  );
};

export default Header;
