import React from "react";
// import { Col, Row, Button } from "antd";
import { IoReceiptOutline } from "react-icons/io5";
import { TbWorldUpload } from "react-icons/tb";
import first from "../utils/assets/Cargo-1.jpg";
import second from "../utils/assets/Cargo-4.jpg";
import gridone from "../utils/assets/grid-one.jpg";
import gridtwo from "../utils/assets/grid-two.jpg";
import gridfour from "../utils/assets/grid-five.jpg";
import gridfive from "../utils/assets/grid-6.jpg";
import singlegrid from "../utils/assets/singlegrid.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../utils/css/home.css";

const Home = () => {
  return (
    <div>
      {/* slider part */}
      <Carousel>
        <div>
          <img src={first} alt="sliderImage" />
        </div>

        <div>
          <img src={second} alt="sliderImage" />
        </div>
      </Carousel>
      {/* slide part ends here */}
      <br />
      <br />
      {/* images and grid */}
      <h2 className="home-service">Services We Offer</h2>
      <br />
      <br />

      <section className="home-section-grid">
        <div class="container-grid">
          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridone} alt="first" />
              </a>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Ocean Freight
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We have more than twenty years of experience. We’ve become
                expert in freight transportation by ship and all its related. In
                comparison to other transportation system it is very cheap and
                fast.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridtwo} alt="second" />
              </a>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Air Freight
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We have more than twenty years of experience. We’ve become
                expert in freight transportation by air and all its related. In
                comparison to other transportation system it is quite expensive
                but fast and realiable.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridfour} alt="second" />
              </a>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Rail/Road Freight
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We have more than ten years of experience. We’ve become expert
                in freight transportation by rail and road and all its related.
                In comparison to other transportation system it is cheap and
                fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-grid">
        <div class="container-grid">
          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridfive} alt="first" />
              </a>

              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Door-to-Door Shipping
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We have the facility for our customers to deliver the package
                door to door via our shipping services. It is one of the best
                services provided by us. It can include via air or land
                depending upon situation.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridtwo} alt="second" />
              </a>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Tracking Services
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We track the every details, time and location of the parcel so
                that our customer's get adequate information about their orders.
                It is one of the best service in direct way cargo.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <a href="/#">
                <img src={gridfive} alt="second" />
              </a>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Other Services
              </h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <br />
                We have more than twenty years of experience. We’ve become
                expert in other transportation and all its related part. In
                comparison to other transportation system it is quite cheap fast
                and realiable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div class="drop-container">
        <div class="columns content">
          <div class="content-container">
            <h5>Why do we use it?</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div class="columns image">&nbsp;</div>
      </div>
      {/* <div className="responsive-services">
        <Row className="down-row">
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
      </div> */}
    </div>
  );
};

export default Home;
