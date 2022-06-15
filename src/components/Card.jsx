import React from "react";
import "../utils/css/card.css";

const Card = ({ code, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-code">
          <h3>{code}</h3>
        </div>
        <p>{body}</p>
        <div className="card-button">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
