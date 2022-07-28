import React from "react";
import { IoReceiptOutline } from "react-icons/io5";
import { TbWorldUpload } from "react-icons/tb";
import first from "../utils/assets/Cargo-1.jpg";
import second from "../utils/assets/Cargo-4.jpg";
import gridone from "../utils/assets/grid-one.jpg";
import gridtwo from "../utils/assets/grid-two.jpg";
import gridfour from "../utils/assets/grid-five.jpg";
import gridfive from "../utils/assets/grid-6.jpg";
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
      <div className="section-container">
        <div className="columns content">
          <div className="content-container">
            <h5>
              Direct Way Cargo Nepal <br />
              Saves Your Time!
            </h5>
            <div className="icons-row">
              <IoReceiptOutline />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Transparent Pricing
            </h3>
            <p>
              The world of international supply chains involves a myriad of
              unknown risks and challenging regulations. It enables consumers to
              compare costs and make informed choices. Price transparency is
              important because knowing what others are bidding, asking, and
              trading can help determine the supply and demand of a security,
              good, or service, i.e., its true value.
            </p>
            <div className="icons-row">
              <TbWorldUpload />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Real-Time Tracking
            </h3>
            <p>
              We ensure our customers supply chains are fully compliant by our
              integral practices and programs.The tracking method that makes use
              of GPS as well as logistics databases to determine the current
              location of a person, vehicle, or object at any moment in time is
              known as Real-time Tracking. When a parcel is scanned, it is
              assigned to a vehicle and its position is constantly monitored.
            </p>
            <div className="btn-row">
              <a href="/status">
                <button className="track-btn">Track Your Order</button>
              </a>
            </div>
          </div>
        </div>
        <div className="columns image">&nbsp;</div>
      </div>
    </div>
  );
};

export default Home;
