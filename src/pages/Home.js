import React from "react";
import { Carousel, Progress, Timeline, Steps } from "antd";
import first from "../utils/assets/real-one.jpg";
import second from "../utils/assets/second-one.jpg";

const Home = () => {
  const { Step } = Steps;
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    height: "450px",
    color: "#fff",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel effect="fade" afterChange={onChange}>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "450px", width: "1600px" }}
              src={first}
              alt="firstimage"
            />
          </h2>
        </div>
        <div>
          <h2 style={contentStyle}>
            <img
              style={{ height: "450px", width: "1600px" }}
              src={second}
              alt="secondimage"
            />
          </h2>
        </div>
      </Carousel>
      <br />
      <br />
      <div className="home-container">
        <br />
        <Timeline style={{ float: "left", marginLeft: "5px" }}>
          <Timeline.Item>
            Parcel delivered at Baneshwor, 2022-06-19
          </Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2022-06-15
          </Timeline.Item>
          <Timeline.Item>Technical testing 2022-05-05</Timeline.Item>
          <Timeline.Item>Parcel rejected, 2022-05-01</Timeline.Item>
        </Timeline>
      </div>
      <div className="progress-container">
        <h2 style={{ textAlign: "center", marginTop: "-3%" }}>
          Progress of Parcels
        </h2>
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "75%": "#87d068",
          }}
          type="circle"
          percent={75}
          width="155px"
          format={(percent) => `${percent}% Parcels delivered`}
        />
        <Progress
          type="circle"
          status="normal"
          percent={60}
          width="155px"
          format={(percent) => `${percent}% Parcels pending`}
        />
        <Progress
          type="circle"
          status="exception"
          percent={55}
          width="155px"
          format={(percent) => `${percent}% Parcels rejected`}
        />
      </div>
      <br />
      <br />
      <h2 style={{ float: "left", marginLeft: "1%" }}>
        Progress step of Parcel
      </h2>
      <Steps current={1}>
        <Step title="Packaging" description="Ready for delivering." />
        <Step
          title="In Progress"
          subTitle="Left 01:10:08"
          description="Delivering to Customer location."
        />
        <Step title="Waiting" description="Parcels to be delivered." />
      </Steps>
    </div>
  );
};

export default Home;
