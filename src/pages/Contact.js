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
            <p className="contact-desc">Madhyapur Thimi-3, Bhaktapur</p>
            <p className="contact-desc">Nepal, 44811</p>
            <br />
            <h3 className="contact-second-header">Communicating Address</h3>
            <h3 className="contact-second-header-2">Direct Way Cargo Nepal.</h3>
            <p className="contact-desc">Regus Business Centre,</p>
            <p className="contact-desc">Ground Floor, Trade Tower</p>
            <p className="contact-desc">Thapathali, Kathmandu</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.881818858878!2d85.31118692940255!3d27.7027572
                  24097677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19aad2524c95%3A0x5a40d1f4226de315!2sApex%20Cargo%20Servi
                  ce%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1656484679733!5m2!1sen!2snp"
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
