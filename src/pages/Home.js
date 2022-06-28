import React from "react";
import { Carousel, Col, Row } from "antd";
import { IoBoatOutline, IoAirplaneOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaTruckLoading } from "react-icons/fa";
import first from "../utils/assets/Cargo-1.jpg";
import second from "../utils/assets/Cargo-4.jpg";
import gridone from "../utils/assets/grid-one.jpg";
import gridtwo from "../utils/assets/grid-two.jpg";
import gridfour from "../utils/assets/grid-five.jpg";
import gridfive from "../utils/assets/grid-6.jpg";

const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    height: "570px",
    color: "#fff",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay effect="fade" afterChange={onChange}>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "610px", width: "1600px" }}
              src={first}
              alt="firstimage"
            />
          </h2>
        </div>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "610px", width: "1600px" }}
              src={second}
              alt="secondimage"
            />
          </h2>
        </div>
      </Carousel>
      <br />
      <h2 className="home-service">Services We Offer</h2>
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
              <br /> become expert in freight <br /> transportation by ship and{" "}
              <br /> all its related. In comparison <br /> to other
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
              We have more than twenty
              <br /> years of experience. We’ve
              <br /> become expert in freight <br /> transportation by ship and
              <br /> all its related. In comparison <br /> to other
              transportation system <br /> it is very cheap and fast.
            </p>
          </Col>
          <Col span={6}>
            {" "}
            <img src={gridfour} alt="two" />
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
            <img src={gridfive} alt="two" />
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <div className="responsive-services">
        <Row>
          <Col span={12}>left</Col>
          <Col span={12}>right</Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
