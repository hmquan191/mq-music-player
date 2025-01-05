import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-icon-png-rgb-white.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">Log In</div>
      </a>
    </div>
  );
}
