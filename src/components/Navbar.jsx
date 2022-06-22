import React from "react";
import "../utils/css/navbar.css";
import { isAuthenticated } from "./common/authPermission";
import { signout } from "../utils/others/authApi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="nav">
      <a className="site-title" href="/">
        Your Parcel
      </a>
      <ul>
        {isAuthenticated() && (
          <li>
            <a href="/parcels">Parcels</a>
          </li>
        )}

        {!isAuthenticated() && (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <li>
            <button
              className="logout-button"
              onClick={() =>
                signout(() => {
                  navigate("/");
                })
              }
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
