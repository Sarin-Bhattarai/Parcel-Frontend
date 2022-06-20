import React from "react";
import "../utils/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed ">
      <div className="footer-left">
        <h3>Your Parcel</h3>
        <br />
        <p className="footer-company-name">
          Copyright © 2022 <strong>Your Parcel</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Baneshwor</span>
            Kathmandu
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+977 9000000000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="https://mail.google.com/" className="text-white">
              parcel@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>Your Parcel</strong> is an parcel management company started
          in 2022 which couriers the parcels to customers globally.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
