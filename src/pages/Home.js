import React from "react";
import { Carousel, Col, Row, Button } from "antd";
import {
  IoBoatOutline,
  IoAirplaneOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { TbTruckDelivery, TbWorldUpload } from "react-icons/tb";
import { FaTruckLoading } from "react-icons/fa";
import first from "../utils/assets/Cargo-1.jpg";
import second from "../utils/assets/Cargo-4.jpg";
import gridone from "../utils/assets/grid-one.jpg";
import gridtwo from "../utils/assets/grid-two.jpg";
import gridfour from "../utils/assets/grid-five.jpg";
import gridfive from "../utils/assets/grid-6.jpg";
import singlegrid from "../utils/assets/singlegrid.jpg";

const Home = () => {
  //function for slide
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    height: "590px",
    color: "#fff",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay effect="fade" afterChange={onChange}>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "615px", width: "1600px" }}
              src={first}
              alt="firstimage"
            />
          </h2>
        </div>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "615px", width: "1600px" }}
              src={second}
              alt="secondimage"
            />
          </h2>
        </div>
      </Carousel>
      {/* slide part ends here */}
      <br />
      <br />
      {/* images and grid */}
      <h2 className="home-service">Services We Offer</h2>
      <br />
      <br />

      <div className="home-container">
        <div className="responsive-services">
          <Row style={{ marginLeft: "1%" }}>
            <Col span={6}>
              <img src={gridone} alt="one" />
            </Col>
            <Col span={6}>
              <span className="home-span">
                <IoBoatOutline className="icon-boat" />
              </span>
              <br />
              <br />
              <h2 className="ocean-header">Ocean Freight</h2>
              <p className="ocean-desc">
                We have more than twenty
                <br /> years of experience. We’ve
                <br /> become expert in freight <br /> transportation by ship
                and <br /> all its related. In comparison <br /> to other
                transportation system <br /> it is very cheap and fast.
              </p>
            </Col>
            <Col span={6}>
              <img src={gridtwo} alt="two" />
            </Col>
            <Col span={6}>
              <span className="home-span">
                <IoAirplaneOutline className="icon-boat" />
              </span>
              <h2 className="ocean-header">Air Freight</h2>
              <p className="ocean-desc">
                We have more than twenty
                <br /> years of experience. We’ve
                <br /> become expert in freight <br /> transportation by air and{" "}
                all <br /> its related. In comparison to <br /> other
                transportation system it <br /> is quite expensive but fast and
                <br />
                realiable.
              </p>
            </Col>
          </Row>
        </div>
        <br />
        <div className="responsive-services">
          <Row style={{ marginLeft: "1%" }}>
            <Col span={6}>
              <span className="home-span">
                <TbTruckDelivery className="icon-boat" />
              </span>
              <br />
              <br />
              <h2 className="ocean-header">Rail/Road Freight</h2>
              <p className="ocean-desc">
                We have more than ten
                <br /> years of experience. We’ve
                <br /> become expert in freight <br /> transportation by rail
                and
                <br />
                road and all its related. In
                <br /> comparison to other
                <br /> transportation system it
                <br /> is cheap and fast.
              </p>
            </Col>
            <Col span={6}>
              {" "}
              <img src={gridfour} alt="four" />
            </Col>

            <Col span={6}>
              <span className="home-span">
                <FaTruckLoading className="icon-boat" />
              </span>
              <h2 className="ocean-header">Other Services</h2>
              <p className="ocean-desc">
                We have more than twenty
                <br /> years of experience. We’ve
                <br /> become expert in freight <br /> transportation by air and
                all <br /> its related. In comparison to <br /> other
                transportation system it <br /> is quite expensive but fast and
                <br />
                realiable.
              </p>
            </Col>

            <Col span={6}>
              <img src={gridfive} alt="five" />
            </Col>
          </Row>
        </div>
      </div>
      <br />
      <br />
      <div className="responsive-services">
        <Row>
          <Col
            style={{
              backgroundColor: "#FF5E14",
              height: "80vh",
            }}
            span={12}
          >
            <h2 className="big-header">
              Direct Way Cargo Nepal
              <br /> Saves Your Time!
            </h2>
            <Row>
              <Col
                style={{ backgroundColor: "#FF5E14", marginLeft: "13%" }}
                span={6}
              >
                <IoReceiptOutline className="row-row-icons" />
                <h3 className="row-row-header">Transparent Pricing</h3>
                <p className="row-row-pes">
                  The world of
                  <br /> international
                  <br /> supply chains
                  <br /> involves a myriad
                  <br /> of unknown risks
                  <br /> and challenging regulations.
                </p>
              </Col>
              <Col
                style={{ backgroundColor: "#FF5E14", marginLeft: "13%" }}
                span={6}
              >
                <TbWorldUpload className="row-row-icons" />
                <h3 className="row-row-header-two">Real-Time Tracking</h3>
                <p className="row-row-pes-two">
                  We ensure
                  <br /> our customers
                  <br /> supply chains
                  <br /> are fully compliant
                  <br /> by our integral
                  <br /> practices and programs.
                </p>
              </Col>
            </Row>
            <a href="/status">
              <Button className="row-row-button" type="loading">
                Track Your Order
              </Button>
            </a>
          </Col>
          <Col style={{ height: "80vh" }} span={12}>
            <img
              style={{
                height: "80vh",
                width: "100%",
              }}
              src={singlegrid}
              alt="singlegridpic"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
