import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [didCollapse, setDidCollapse] = useState(false);

  return (
    <div>
      {/* Link is usually used in place of a components but just for readability i decided to use normal html tags */}
      <div className="navbar">
        <div className="logo">
          <a href="#logo">Sturtup</a>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#tarif">Tarifs</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
          <div className="register">
            <button className="btn">Login</button>
            <button className="btn primary">Sign Up</button>
          </div>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setDidCollapse(!didCollapse);
            if (didCollapse === true) {
              document.querySelector(".navbar").classList.add("collapse");
              document.querySelector(".navbar-items").classList.add("show");
            } else {
              document.querySelector(".navbar").classList.remove("collapse");
              document.querySelector(".navbar-items").classList.remove("show");
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
