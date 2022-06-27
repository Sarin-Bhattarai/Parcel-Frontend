import React from "react";
import "../utils/css/navbar.css";
import { isAuthenticated } from "./common/authPermission";
import { signout } from "../utils/others/authApi";
import { useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  LoginOutlined,
  UserOutlined,
  TagOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="nav">
      <a className="site-title" href="/">
        Your Parcel
      </a>
      <ul>
        <li>
          <a href="/status">
            <QuestionCircleOutlined style={{ marginRight: "4px" }} />
            Status
          </a>
        </li>
        {isAuthenticated() && (
          <>
            <li>
              <a href="/parcels">
                <TagOutlined style={{ marginRight: "4px" }} />
                Parcels
              </a>
            </li>
          </>
        )}

        {!isAuthenticated() && (
          <>
            <li>
              <a href="/login">
                <LoginOutlined style={{ marginRight: "4px" }} />
                Login
              </a>
            </li>
            <li>
              <a href="/register">
                <UserOutlined style={{ marginRight: "4px" }} />
                Register
              </a>
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
              <LogoutOutlined style={{ marginRight: "4px" }} />
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
