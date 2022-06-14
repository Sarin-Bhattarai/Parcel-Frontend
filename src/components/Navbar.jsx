import React from "react";
import "../utils/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a className="site-title" href="/">
        Your Parcel
      </a>
      <ul>
        <li>
          <a href="/parcels">Parcels</a>
        </li>
        <li>
          <a href="/status">Status</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
