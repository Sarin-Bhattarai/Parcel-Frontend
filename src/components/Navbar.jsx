import React from "react";
import "../utils/css/navbar.css";
import { isAuthenticated } from "./common/authPermission";
import { signout } from "../utils/others/authApi";
import { useNavigate } from "react-router-dom";
import Logo from "../utils/assets/Logo.png";
import {
  LogoutOutlined,
  LoginOutlined,
  // UserOutlined,
  TagOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <div className="main-header-navbar">
          <span className="phone-header-nav">
            <PhoneOutlined /> +977-1-5350337 / +977-1-5316559
          </span>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsLZhnwRBhfbkRzZXPfcvhTRxLqZjQvZQnlvkBHFgLGtRZrWVxDcLrdxSmTxnvJBQfDHg"
            className="mail-header-nav"
            target="next"
          >
            <MailOutlined /> directwy@gmail.com
          </a>
        </div>
        <nav className="nav">
          <a href="/">
            <img className="site-title" src={Logo} alt="Logo" />
          </a>
          <ul>
            <li>
              <a href="/status">
                <QuestionCircleOutlined style={{ marginRight: "4px" }} />
                Status
              </a>
            </li>
            <li>
              <a href="/contact">
                <ContactsOutlined style={{ marginRight: "4px" }} />
                Contact
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
                {/* <li>
              <a href="/register">
                <UserOutlined style={{ marginRight: "4px" }} />
                Register
              </a>
            </li> */}
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
      </div>
    </>
  );
};

export default Navbar;
