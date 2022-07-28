import React, { useState } from "react";
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
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
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
          <ul className={active}>
            <li className="nav__item">
              <a href="/status">
                <QuestionCircleOutlined style={{ marginRight: "4px" }} />
                Tracking
              </a>
            </li>
            <li className="nav__item">
              <a href="/contact">
                <ContactsOutlined style={{ marginRight: "4px" }} />
                Contact
              </a>
            </li>
            {isAuthenticated() && (
              <>
                <li className="nav__item">
                  <a href="/parcels">
                    <TagOutlined style={{ marginRight: "4px" }} />
                    Parcels
                  </a>
                </li>
              </>
            )}

            {!isAuthenticated() && (
              <>
                <li className="nav__item">
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
              <li className="nav__item">
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
