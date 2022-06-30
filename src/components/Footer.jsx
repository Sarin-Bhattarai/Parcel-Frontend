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
          href="https://mail.google.com/mail/u/0/#inbox"
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
            <span style={{ fontSize: "25px" }}>Madhyapur Thimi</span>
            <p style={{ marginLeft: "25%" }}>Bhaktapur</p>
            <br />
            <br />
            <p style={{ marginLeft: "30%" }}>Nepal</p>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p style={{ marginLeft: "4%" }}>+977 9000000000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            {/* <a href="https://mail.google.com/" className="text-white">
              parcel@gmail.com
            </a> */}
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>Direct Way Cargo</strong> is an parcel management company
          started in 2022 which couriers the parcels to customers globally.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
