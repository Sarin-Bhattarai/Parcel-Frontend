import React from "react";
import "../utils/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed ">
      <div className="footer-left">
        <h3>Direct Way Cargo ||</h3>
        <br />
        <h4 style={{ color: "white", fontSize: "19px" }}>
          Design and Developed by:
        </h4>
        <a
          style={{ marginLeft: "8%" }}
          target="next"
          href="https://apptechnologies.co/"
        >
          App Technologies
        </a>
        <br />
        <br />
        <p className="footer-company-name">
          Copyright © 2022 <strong>Direct Way Cargo</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span style={{ fontSize: "25px" }}>Thamel Marg</span>
            <p style={{ marginLeft: "25%" }}>Kathmandu</p>
            <br />
            <br />
            <p style={{ marginLeft: "30%" }}>Nepal</p>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p style={{ marginLeft: "4%" }}>+977-1-5350337</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p></p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>Direct Way Cargo Nepal</strong> are a dedicated and highly
          motivated group of people who have over 18 years of in-depth knowledge
          and experience in cargo services the around the world. As such, we
          have been playing an important role in attaining client’s
          organizational goals by meeting their diverse needs and delivering
          solutions that best meet their distribution needs at reasonable rates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
