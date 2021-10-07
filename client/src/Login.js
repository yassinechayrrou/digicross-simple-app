import React from "react";
import "./Login.css";
import google from "./img/google.png";
import facebook from "./img/facebook.png";

const Login = () => {
  return (
    <div className="login-box">
      <button className="register-btn google">
        <img src={google} alt="google-logo" />
        Connect with Google
      </button>
      <button className="register-btn facebook">
        <img src={facebook} alt="facebook-logo" />
        Connect with facebook
      </button>
      <div className="or">
        <hr />
        <span className="hr-span">or</span>
      </div>
      <label>
        <input placeholder="name@example.com" type="email" />
      </label>
      <button className="register-btn mail">Connect with mail</button>
    </div>
  );
};

export default Login;
