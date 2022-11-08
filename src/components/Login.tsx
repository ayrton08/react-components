import React from "react";
import { Field } from "./Field";
import { Button } from "./Button";
import "./login.css";

export interface LoginProps {
  icon?: string;
  google?: string;
  facebook?: string;
}

export const Login = ({ facebook, google, icon }: LoginProps) => {
  return (
    <form>
      <img src={icon} alt="" className="login" />
      <h3>Login</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>
      <div className="social">
        <div className="icons-container">
          <img src={google || ""} alt="" className="icon" />
          <span>Google</span>
        </div>
        <div className="icons-container">
          <img src={facebook || ""} alt="" className="icon" />

          <span>Facebook</span>
        </div>
      </div>
    </form>
  );
};
