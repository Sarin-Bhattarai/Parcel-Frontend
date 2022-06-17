import React from "react";
import "../utils/css/card.css";
import { Link } from "react-router-dom";

const Card = ({ code, imageUrl, body, id }) => {
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
          <Link to={`/parcels/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
