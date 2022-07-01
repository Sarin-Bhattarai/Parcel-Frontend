import React from "react";
import { Col, Row } from "antd";

const Contact = () => {
  return (
    <>
      <div className="responsive-contact">
        <Row style={{ marginLeft: "5%" }}>
          <Col span={12}>
            <h1 className="contact-header">Contact Us</h1>
            <h3 className="contact-second-header">Registered Address</h3>
            <h3 className="contact-second-header-2">Direct Way Cargo Nepal.</h3>
            <p className="contact-desc">Thamel Marg, Kathmandu</p>
            <p className="contact-desc">Nepal, 44600</p>
            <br />
            <h3 className="contact-second-header">Through Social Media</h3>
            <h3 className="contact-second-header-2">Direct Way Cargo Nepal.</h3>
            <p className="contact-desc">
              <strong>Facebook:</strong> Directway{" "}
            </p>
            <p className="contact-desc">
              {" "}
              <strong>Twitter:</strong> Directway{" "}
            </p>
            <p className="contact-desc">
              <strong>Email:</strong> directwy@gmail.com
            </p>
            <p className="contact-desc">Nepal, 44600</p>
          </Col>
          <Col span={12}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  title="Map"
                  height="600"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1039729689837!2d85.3090095150622!3d27.71407588278913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd010cc20b%3A0x24fe730f1c729eec!2sDirect%20Way%20Exporters!5e0!3m2!1sen!2snp!4v1656639572926!5m2!1sen!2snp"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
